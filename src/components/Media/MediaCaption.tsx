import React from 'react';
import cx from 'classnames';

type MediaCaptionProps = {
  caption?: string;
  captionDisplay?: string;
  className?: string;
  credit?: string;
  licence?: string;
};

const MediaCaption = ({
  caption,
  captionDisplay,
  className,
  credit,
  licence
}: MediaCaptionProps) => {
  const classNames = cx('cc-media__caption', {
    'cc-media__caption--below-image': captionDisplay === 'below_image',
    [`${className}`]: className
  });

  return (caption && captionDisplay !== 'hide') || credit ? (
    <figcaption className={classNames}>
      {caption && captionDisplay !== 'hide' && (
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
