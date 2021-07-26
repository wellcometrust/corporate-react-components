import React from 'react';

import Media from 'Media';
import ImageElement from './ImageElement';

type ImageProps = {
  alt: string;
  captionText?: string;
  captionVariant?: 'below' | 'right';
  credit?: string;
  className?: string;
  licence?: string;
  shouldHideCaption?: boolean;
  sizes?: string;
  src: string;
  srcSet?: string;
};

const imageSizesDefault =
  '(min-width: 1494px) 648px, (min-width: 1024px) 42vw, (min-width: 768px) 75vw, 90vw';

export const Image = ({
  alt = '',
  captionText,
  captionVariant = 'right',
  credit,
  className,
  licence,
  shouldHideCaption,
  sizes = imageSizesDefault,
  src,
  srcSet
}: ImageProps) => (
  <Media
    caption={captionText}
    captionVariant={captionVariant}
    className={className}
    credit={credit}
    licence={licence}
    shouldHideCaption={shouldHideCaption}
  >
    <ImageElement alt={alt} sizes={srcSet && sizes} src={src} srcSet={srcSet} />
  </Media>
);

export default Image;
export { ImageElement };
