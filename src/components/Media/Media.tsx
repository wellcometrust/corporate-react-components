import React from 'react';
import cx from 'classnames';

import MediaCaption from './MediaCaption';

type MediaProps = {
  caption?: string;
  captionVariant?: 'below' | 'right';
  children: React.ReactElement;
  className?: string;
  credit?: string;
  licence?: string;
  shouldHideCaption?: boolean;
};

const Media = ({
  caption,
  captionVariant = 'right',
  children,
  className,
  credit,
  licence,
  shouldHideCaption
}: MediaProps) => {
  const classNames = cx('cc-media', {
    [className]: className
  });

  return (
    <figure className={classNames}>
      <div className="cc-media__element">{children}</div>
      <MediaCaption
        caption={caption}
        className={cx({
          'cc-media--caption-below-image': captionVariant === 'below',
          'cc-media--caption-beside-image': captionVariant === 'right'
        })}
        credit={credit}
        licence={licence}
        shouldHideCaption={shouldHideCaption}
      />
    </figure>
  );
};

export default Media;
export { MediaCaption };
