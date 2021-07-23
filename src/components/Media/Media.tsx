import React from 'react';
import cx from 'classnames';

import MediaCaption from './MediaCaption';

type MediaProps = {
  caption?: string;
  captionDisplay?: string;
  children: React.ReactElement;
  className?: string;
  credit?: string;
  licence?: string;
};

const Media = ({
  caption,
  captionDisplay,
  children,
  className,
  credit,
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
        captionDisplay={captionDisplay}
        className={cx({
          'cc-media--wide__caption': captionDisplay !== 'below_image'
        })}
        credit={credit}
        licence={licence}
      />
    </figure>
  );
};

export default Media;
export { MediaCaption };
