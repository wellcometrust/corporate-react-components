import React from 'react';
import cx from 'classnames';

import { parseHtml } from 'utils/parse-html';

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
          dangerouslySetInnerHTML={{ __html: parseHtml(caption) }}
        />
      )}
      {credit && (
        <div
          className="cc-media__credit"
          dangerouslySetInnerHTML={{ __html: `Credit: ${parseHtml(credit)}` }}
        />
      )}
      {licence && (
        <div
          className="cc-media__licence"
          dangerouslySetInnerHTML={{ __html: `Licence: ${parseHtml(licence)}` }}
        />
      )}
    </figcaption>
  ) : null;
};

export default MediaCaption;
