import React from 'react';
import cx from 'classnames';

import { sanitizeHtml } from 'utils/sanitize-html';

type MediaCaptionProps = {
  caption?: string;
  className?: string;
  credit?: string;
  licence?: string;
  shouldHideCaption?: boolean;
};

const MediaCaption = ({
  caption,
  className,
  credit,
  licence,
  shouldHideCaption
}: MediaCaptionProps) => {
  const classNames = cx('cc-media__caption', {
    [`${className}`]: className
  });

  return (caption && !shouldHideCaption) || credit ? (
    <figcaption className={classNames}>
      <div className="cc-media__caption-content">
        {caption && !shouldHideCaption && (
          <div
            className="cc-media__caption-detail"
            dangerouslySetInnerHTML={{ __html: sanitizeHtml(caption) }}
          />
        )}
        {credit && (
          <div
            className="cc-media__credit"
            dangerouslySetInnerHTML={{
              __html: `Credit: ${sanitizeHtml(credit)}`
            }}
          />
        )}
        {licence && (
          <div
            className="cc-media__licence"
            dangerouslySetInnerHTML={{
              __html: `Licence: ${sanitizeHtml(licence)}`
            }}
          />
        )}
      </div>
    </figcaption>
  ) : null;
};

export default MediaCaption;
