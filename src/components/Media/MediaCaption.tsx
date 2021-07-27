import React from 'react';
import cx from 'classnames';

type MediaCaptionProps = {
  caption?: string;
  captionVariant?: 'below' | 'right';
  className?: string;
  credit?: string;
  licence?: string;
  shouldHideCaption?: boolean;
};

const MediaCaption = ({
  caption,
  captionVariant = 'right',
  className,
  credit,
  licence,
  shouldHideCaption
}: MediaCaptionProps) => {
  const classNames = cx('cc-media__caption', {
    'cc-media__caption--below-image': captionVariant === 'below',
    [`${className}`]: className
  });

  return (caption && !shouldHideCaption) || credit ? (
    <figcaption className={classNames}>
      {caption && !shouldHideCaption && (
        <div
          className="cc-media__caption-detail"
          dangerouslySetInnerHTML={{ __html: caption }}
        />
      )}
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
    </figcaption>
  ) : null;
};

export default MediaCaption;
