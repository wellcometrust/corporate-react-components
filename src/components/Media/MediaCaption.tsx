import React from 'react';
import cx from 'classnames';

type MediaCaptionProps = {
  caption?: string;
  captionVariant?: 'below' | 'right';
  className?: string;
  credit?: string;
  hideCaption?: boolean;
  licence?: string;
};

const MediaCaption = ({
  caption,
  captionVariant = 'right',
  className,
  credit,
  hideCaption,
  licence
}: MediaCaptionProps) => {
  const classNames = cx('cc-media__caption', {
    'cc-media__caption--below-image': captionVariant === 'below',
    [`${className}`]: className
  });

  return (caption && !hideCaption) || credit ? (
    <figcaption className={classNames}>
      {caption && !hideCaption && (
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
