/**
 * @deprecated Gallery and GalleryMedia are to be moved to corporate-react
 *
 * @see {@link https://github.com/wellcometrust/corporate/issues/8947}
 */
import React, {
  Children,
  cloneElement,
  MouseEventHandler,
  useEffect,
  useState
} from 'react';
import cx from 'classnames';

import Button from 'Button';
import ImageElement from 'Image/ImageElement';
import GalleryLightBox from 'GalleryLightBox';

import getUrlParameters from 'utils/get-url-parameters';

type GalleryMediaProps = {
  alt?: string;
  canDownload?: boolean;
  caption?: string;
  credit?: string;
  fileSize?: number;
  height: number;
  isLead?: boolean;
  isNewRow?: boolean;
  licence?: string;
  mediaSources: any;
  onClick?: MouseEventHandler;
  title?: string;
  width: number;
};

const imageSizes = {
  default:
    '(min-width: 1494px) 310px, (min-width: 1024px) 20vw, (min-width: 768px) 27vw, (min-width: 512px) 42vw, 90vw',
  landscape:
    '(min-width: 1494px) 996px, (min-width: 1024px) 66vw, (min-width: 768px) 90vw, 90vw',
  portrait:
    '(min-width: 1494px) 482px, (min-width: 1024px) 32vw, (min-width: 768px) 43vw, 90vw'
};

const getSizes = (isLead: boolean, isPortrait: boolean) => {
  if (isLead && isPortrait) {
    return imageSizes.landscape;
  }
  if (isLead && !isPortrait) {
    return imageSizes.landscape;
  }

  return imageSizes.default;
};

export const GalleryMedia = ({
  alt,
  canDownload = false,
  caption,
  credit,
  fileSize,
  height,
  isLead,
  isNewRow,
  licence,
  mediaSources,
  onClick = () => {},
  title,
  width
}: GalleryMediaProps) => {
  const isPortrait = height > width;
  const classNames = cx('cc-gallery__media-item', {
    'cc-gallery__media-lead': isLead,
    'cc-gallery__media-lead--landscape': isLead && !isPortrait,
    'cc-gallery__media-lead--portrait': isLead && isPortrait
  });

  const sizes = getSizes(isLead, isPortrait);

  const src = isLead
    ? mediaSources.gallery_full_mobile
    : mediaSources.gallery_thumbnail_square_mobile;

  const srcSetLeadWidth = isPortrait ? '482w' : '790w';

  const srcSet = isLead
    ? `
      ${mediaSources.gallery_full_mobile} 768w,
      ${mediaSources.gallery_full_mobile_hi} 1538w
    `
    : `
      ${mediaSources.gallery_thumbnail_square_mobile} 310w,
      ${mediaSources.gallery_thumbnail_square_mobile_hi} 620w`;

  return (
    <>
      {isNewRow && <div className="break break--sm"> </div>}
      <div className={classNames}>
        <Button
          className="cc-gallery__media-frame"
          onClick={onClick}
          variant="unstyled"
        >
          <span className="cc-gallery__media-content">
            <ImageElement alt={alt} sizes={sizes} src={src} srcSet={srcSet} />
          </span>
        </Button>
      </div>
      {isLead && <div className="break"> </div>}
    </>
  );
};

type GalleryProps = {
  children?: JSX.Element | JSX.Element[];
  galleryId?: string;
  hasLeadItem?: boolean;
  handleClose?: () => void;
  handleBack?: () => void;
  handleNext?: () => void;
};

export const Gallery = ({
  children,
  galleryId,
  hasLeadItem = false,
  handleClose = () => {},
  handleBack = () => {},
  handleNext = () => {}
}: GalleryProps) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentLightboxSlideIndex, setCurrentLightboxSlideIndex] = useState(0);

  const openLightbox = (slideIndex: number) => {
    setCurrentLightboxSlideIndex(slideIndex);
    setIsLightboxOpen(true);
  };

  const handleLightBoxClose = () => {
    handleClose();
    setIsLightboxOpen(false);
  };

  /**
   * Capture specific gallery and photo linking from hash
   * Hash is used in preference to querystring as the latter causes
   * the page to reload
   * As an aside `getStaticPaths` generates static files, which means they can't
   * access querystring at generation time
   * https://github.com/vercel/next.js/discussions/10951
   */
  useEffect(() => {
    const hash = getUrlParameters(window.location?.hash.substring(1));
    const gid = hash?.gid;
    const pid = parseInt(hash?.pid as string, 10);

    if (gid === galleryId) {
      openLightbox(pid);
    }

    return () => {};
  }, []);

  /**
   * @constant {number}
   * The number of columns in the layout
   */
  const columnTotal = 3;

  /**
   * @constant {number}
   * Set the modulus used to define the start of a new row
   */
  const newRowModulus = hasLeadItem ? 0 : 2;

  /**
   * Total number of child items including lead image
   */
  const childrenTotal = Children.count(children);

  /**
   * Set additional props for child components
   */
  const childrenWithProps = Children.map(children, (child, index) =>
    cloneElement(child, {
      /**
       * If the gallery is 'lead image' enabled, then set the first item accordingly
       */
      isLead: hasLeadItem && index === 0,

      /**
       * Set this boolean to true for 2nd to last item to force a new row
       * if the very last item is an orphan.
       */
      isNewRow:
        index === childrenTotal - 2 && index % columnTotal === newRowModulus,

      /**
       * Pass an additional onClick handler to the child, to allow it to open
       * the lightbox from itself.
       */
      onClick: () => {
        child.props.onClick(galleryId, index);
        openLightbox(index);
      }
    })
  );

  const lightboxSlides = Children.map(children, child => {
    return {
      alt: child.props.alt,
      canDownload: child.props.canDownload,
      caption: child.props.caption,
      credit: child.props.credit,
      fileSize: child.props.fileSize,
      licence: child.props.licence,
      mediaSources: child.props.mediaSources,
      title: child.props.title
    };
  });

  return (
    <div className="cc-gallery grid" id={galleryId}>
      <div className="cc-gallery__media">{childrenWithProps}</div>
      {isLightboxOpen && (
        <GalleryLightBox
          galleryId={galleryId}
          handleClose={handleLightBoxClose}
          isOpen={isLightboxOpen}
          handleBack={handleBack}
          handleNext={handleNext}
          openAtSlideIndex={currentLightboxSlideIndex}
          slides={lightboxSlides}
        />
      )}
    </div>
  );
};

export default Gallery;
