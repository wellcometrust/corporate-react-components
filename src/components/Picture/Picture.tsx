import React, { useEffect, useState, SyntheticEvent } from 'react';
import cx from 'classnames';

type PictureProps = {
  alt?: string;
  className?: string;
  fallbackSrc?: string;
  // TODO: establish method for setting lazy loading based on latest spec
  isLazy?: boolean;
  sources: {
    sourceMedia?: string;
    sourcePreload: string;
    sourceFull: string;
    sourceType: string;
  }[];
  src?: string;
  srcSet?: string;
};

const Picture = ({
  alt = '',
  className,
  fallbackSrc,
  isLazy,
  src,
  srcSet,
  sources
}: PictureProps) => {
  const [loaded, setLoaded] = useState(false);
  const [shouldUseFullSrc, setShouldUseFullSrc] = useState(false);

  const classNames = cx({
    'u-loading-lazy': isLazy && !loaded,
    'u-loading-preload': !shouldUseFullSrc,
    [className]: className
  });

  const onLoad = () => {
    setLoaded(true);
  };

  const onError = (e: SyntheticEvent) => {
    // eslint-disable-next-line no-console
    console.error('error', e);
  };

  useEffect(() => {
    setShouldUseFullSrc(true);
  }, []);

  return (
    <picture>
      {sources?.map(s => (
        <source
          key={s.sourcePreload}
          type={s.sourceType}
          media={s.sourceMedia}
          srcSet={shouldUseFullSrc ? s.sourceFull : s.sourcePreload}
        />
      ))}
      <img
        onError={onError}
        onLoad={onLoad}
        src={isLazy ? fallbackSrc : src}
        alt={alt}
        className={classNames}
        srcSet={isLazy ? '' : srcSet}
      />
    </picture>
  );
};

export default Picture;
