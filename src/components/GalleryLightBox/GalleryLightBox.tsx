/**
 * @deprecated GalleryLightbox is to be moved to corporate-react
 *
 * @see {@link https://github.com/wellcometrust/corporate/issues/8947}
 */
import React, { useContext, useState } from 'react';
import cx from 'classnames';
// import { useHotkeys } from 'react-hotkeys-hook';

import {
  ButtonBack,
  ButtonNext,
  ImageWithZoom,
  CarouselProvider,
  Slide,
  Slider
} from '@wellcometrust/pure-react-carousel';

import Button from 'Button';
import Icon from 'Icon';
import SocialShare from 'SocialShare';
import Text from 'Text';

// import { ViewportContext } from 'ViewportContext/ViewportContext';

import useLockBodyScroll from 'utils/use-body-scroll-lock';

type GalleryLightBoxProps = {
  galleryId?: string;
  handleBack: (galleryId: string, index: number) => void;
  handleClose: () => void;
  handleNext: (galleryId: string, index: number) => void;
  isOpen?: boolean;
  openAtSlideIndex?: number;
  slides: GalleryLightBoxSlideProps[];
};

type GalleryLightBoxSlideProps = {
  alt?: string;
  canDownload?: boolean;
  caption: string;
  credit?: string;
  fileSize: number;
  licence?: string;
  mediaSources: {
    gallery_full: string;
    gallery_full_hi: string;
    gallery_full_mobile: string;
    gallery_full_mobile_hi: string;
  };
  src?: string;
  title?: string;
};

export const GalleryLightBox = ({
  galleryId,
  handleBack,
  handleClose,
  handleNext,
  isOpen,
  openAtSlideIndex = 0,
  slides
}: GalleryLightBoxProps) => {
  useLockBodyScroll();

  // const { isMobile } = useContext(ViewportContext);
  const isMobile = true;

  // Design feedback - on mobile info is always visible and will be scrolled down to
  const initialInfoPaneVisibility = true;

  const [isInfoPaneVisible, setIsInfoPaneVisible] = useState(
    initialInfoPaneVisibility
  );

  const toggleInfoPane = () => {
    setIsInfoPaneVisible(!isInfoPaneVisible);
  };

  const infoPaneClassNames = {
    grid: cx('cc-gallery-lightbox__slide-content', {
      'cc-gallery-lightbox__slide-content--wide': !isInfoPaneVisible
    }),
    toggle: cx('cc-gallery-lightbox__slide-actions-toggle', {
      'cc-gallery-lightbox__slide-actions-toggle--is-active':
        isInfoPaneVisible && !isMobile
    })
  };

  /**
   * Use react-hot-keys hook to detect user clicking 'escape'
   * to close the lightbox.
   * TODO: This causes an error in IE11 - investigate and reinstate or replace
   */
  // useHotkeys('esc', () => {
  //   handleClose();
  // });

  return (
    <dialog className="cc-gallery-lightbox" open={isOpen}>
      <Button
        autoFocus
        className="cc-gallery-lightbox__close"
        onClick={handleClose}
        role="button"
        variant="unstyled"
      >
        <Icon name="closeBold" />
      </Button>
      <CarouselProvider
        className="cc-gallery-lightbox__carousel"
        currentSlide={openAtSlideIndex}
        dragEnabled={false}
        isIntrinsicHeight
        naturalSlideWidth={16}
        naturalSlideHeight={9}
        totalSlides={slides.length}
      >
        <Slider
          className="cc-gallery-lightbox__slider"
          classNameTray="cc-gallery-lightbox__slider-tray"
          classNameTrayWrap="cc-gallery-lightbox__slider-tray-wrap"
        >
          {slides.map((slide: GalleryLightBoxSlideProps, index: number) => {
            const srcSet = `${slide.mediaSources.gallery_full} 769w, ${slide.mediaSources.gallery_full_hi} 1538w`;
            const infoPaneContent = slide.title
              ? `<h2 class="cc-gallery-lightbox__info-title">${slide.title}</h2>${slide.caption}`
              : slide.caption;

            return (
              <Slide
                className="cc-gallery-lightbox__slide"
                index={index}
                innerClassName="cc-gallery-lightbox__slide-layout"
                key={`gallery-lightbox-slide-${galleryId}-${index + 1}`}
              >
                <figure className={infoPaneClassNames.grid}>
                  <div className="cc-gallery-lightbox__image-pane">
                    <ImageWithZoom
                      className="cc-gallery-lightbox__image"
                      src={slide.mediaSources.gallery_full}
                      srcZoomed={slide.mediaSources.gallery_full_hi}
                    />
                  </div>
                  <div className="cc-gallery-lightbox__slide-actions">
                    <div className="cc-gallery-lightbox__nav">
                      <ButtonBack
                        className="cc-gallery-lightbox__nav-item cc-gallery-lightbox__nav-item--back u-color-inherit"
                        onClick={() => handleBack(galleryId, index)}
                      >
                        <Icon name="arrow" />
                      </ButtonBack>
                      <span className="cc-gallery-lightbox__nav-item cc-gallery-lightbox__nav-item--count">
                        {`${index + 1} / ${slides.length}`}
                      </span>
                      <ButtonNext
                        className="cc-gallery-lightbox__nav-item cc-gallery-lightbox__nav-item--next u-color-inherit"
                        onClick={() => handleNext(galleryId, index)}
                      >
                        <Icon name="arrow" />
                      </ButtonNext>
                    </div>
                    <Button
                      className={infoPaneClassNames.toggle}
                      icon="chevronThin"
                      iconPlacementSwitch
                      isDisabled={isMobile}
                      onClick={toggleInfoPane}
                      role="button"
                      variant="unstyled"
                    >
                      {!isMobile ? (
                        <>{isInfoPaneVisible ? 'Hide info' : 'Show info'}</>
                      ) : (
                        'Scroll down for info'
                      )}
                    </Button>
                  </div>

                  <figcaption className="cc-gallery-lightbox__info-pane d">
                    <Text
                      className="cc-gallery-lightbox__info-content"
                      variant="text-snippet"
                    >
                      {infoPaneContent}
                    </Text>
                  </figcaption>

                  <div className="cc-gallery-lightbox__footer">
                    {!!(slide.credit || slide.licence) && (
                      <dl className="cc-gallery-lightbox__meta">
                        {slide.credit && (
                          <span className="cc-gallery-lightbox__meta-item">
                            <dt className="cc-gallery-lightbox__meta-item-label">
                              Image credit:{' '}
                            </dt>
                            <dd
                              className="cc-gallery-lightbox__meta-item-text"
                              dangerouslySetInnerHTML={{ __html: slide.credit }}
                            />
                          </span>
                        )}
                        {slide.licence && (
                          <span className="cc-gallery-lightbox__meta-item">
                            <dt className="cc-gallery-lightbox__meta-item-label">
                              Image licence:{' '}
                            </dt>
                            <dd className="cc-gallery-lightbox__meta-item-text">
                              {slide.licence}
                            </dd>
                          </span>
                        )}
                      </dl>
                    )}
                    {slide.canDownload && (
                      <div className="cc-gallery-lightbox__download">
                        <a
                          className="cc-gallery-lightbox__download-link u-color-inherit"
                          download
                          href={slide.mediaSources.gallery_full_hi}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <span className="cc-gallery-lightbox__download-icon">
                            <Icon name="download" />
                          </span>
                          Download
                        </a>
                        <span className="cc-gallery-lightbox__download-filesize">
                          {`[${(slide.fileSize / (1024 * 1024)).toFixed(
                            2
                          )} MB]`}
                        </span>
                      </div>
                    )}
                    <SocialShare
                      body={infoPaneContent}
                      caption={slide.caption}
                      credit={slide.credit}
                      hasCopyLink
                      title={slide.title}
                      url={window?.location.href}
                    />
                  </div>
                </figure>
              </Slide>
            );
          })}
        </Slider>
      </CarouselProvider>
    </dialog>
  );
};

export default GalleryLightBox;
