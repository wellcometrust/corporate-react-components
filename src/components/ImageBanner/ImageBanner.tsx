/**
 * @deprecated ImageBanner is to be moved to corporate-react
 *
 * @see {@link https://github.com/wellcometrust/corporate/issues/8947}
 */
import React, { useContext } from 'react';
import cx from 'classnames';

import Accordion, { AccordionItem } from 'Accordion/Accordion';
import ImageElement from 'Image/ImageElement';

import ViewportContext from 'ViewportContext/ViewportContext';

type ImageBannerProps = {
  alt: string;
  caption?: string;
  credit?: string;
  className?: string;
  licence?: string;
  sizes?: string;
  src: string;
  srcSet?: string;
};

const imageSizesDefault = '100vw';

export const ImageBanner = ({
  alt,
  caption,
  credit,
  className,
  licence,
  sizes = imageSizesDefault,
  src,
  srcSet
}: ImageBannerProps) => {
  const { isMobile } = useContext(ViewportContext);
  const classNames = cx('cc-image-banner', {
    [`${className}`]: className
  });

  return (
    <figure className={classNames} role="banner">
      <div className="cc-image-banner__image">
        <ImageElement
          alt={alt}
          role="presentation"
          sizes={sizes}
          src={src}
          srcSet={srcSet}
        />
      </div>

      {caption || credit || licence ? (
        <div className="cc-image-banner__caption-container">
          <figcaption className="cc-media__caption cc-image-banner__caption">
            {credit && (
              <div
                className="cc-media__credit"
                dangerouslySetInnerHTML={{ __html: `Credit: ${credit}` }}
              />
            )}
            {licence && (
              <div
                className="cc-media__licence"
                dangerouslySetInnerHTML={{ __html: `Licence: ${licence}` }}
              />
            )}
            {isMobile && caption ? (
              <Accordion>
                <AccordionItem
                  title="Read the caption"
                  titleAs="strong"
                  titleActive="Hide the caption"
                  variant="chevron"
                >
                  <div
                    className="cc-media__caption-detail"
                    dangerouslySetInnerHTML={{ __html: caption }}
                  />
                </AccordionItem>
              </Accordion>
            ) : (
              caption && (
                <div
                  className="cc-media__caption-detail"
                  dangerouslySetInnerHTML={{ __html: caption }}
                />
              )
            )}
          </figcaption>
        </div>
      ) : null}
    </figure>
  );
};

export default ImageBanner;
