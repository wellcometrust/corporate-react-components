import React from 'react';
import cx from 'classnames';

import MediaCaption from './MediaCaption';

type MediaProps = {
  caption?: string;
  captionVariant?: 'below' | 'right';
  children: React.ReactElement;
  className?: string;
  credit?: string;
  hideCaption?: boolean;
  licence?: string;
};

const Media = ({
  caption,
  captionVariant = 'right',
  children,
  className,
  credit,
  hideCaption,
  licence
}: MediaProps) => {
  const classNames = cx('cc-media', {
    [className]: className
  });

  return (
    <figure className={classNames}>
      <div className="cc-media__element">{children}</div>
      <MediaCaption
        caption={caption}
        captionVariant={captionVariant}
        className={cx({
          'cc-media--wide__caption': captionVariant === 'right'
        })}
        credit={credit}
        hideCaption={hideCaption}
        licence={licence}
      />
    </figure>
  );
};

export default Media;
export { MediaCaption };
