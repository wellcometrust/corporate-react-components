import React from 'react';
import cx from 'classnames';

import CTALink from 'CTALink';
import { ImageElement } from 'Image';
import Link from 'Link';
import RichText from 'RichText';

type ImageCardWithCTAProps = {
  className?: string;
  description?: string;
  href: string;
  imageAlt: string;
  imageHeight?: string;
  imageSizes?: string;
  imageSrc: string;
  imageSrcSet?: string;
  imageWidth?: string;
  linkText?: string;
  title: string;
  titleAs?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export const ImageCardWithCTA = ({
  className,
  description,
  href,
  imageAlt,
  imageHeight,
  imageSizes = '(min-width: 1500px) 400px, (min-width: 1024px) calc(30vw - 48px), (min-width: 768px) calc(30vw - 40px), 30vw',
  imageSrc,
  imageSrcSet,
  imageWidth,
  linkText,
  title,
  titleAs = 'h3'
}: ImageCardWithCTAProps) => {
  const TitleElement = titleAs;
  const classNames = cx('cc-image-card-with-cta', {
    [className]: className
  });

  return (
    <article
      className={classNames}
      itemScope
      itemType="https://schema.org/Article"
    >
      <div className="cc-image-card-with-cta__figure">
        <figure className="cc-image-card-with-cta__image">
          <ImageElement
            alt={imageAlt}
            height={imageHeight}
            itemProp="image"
            sizes={imageSizes}
            src={imageSrc}
            srcSet={imageSrcSet}
            width={imageWidth}
          />
        </figure>
      </div>
      <div className="cc-image-card-with-cta__body">
        <TitleElement className="cc-image-card-with-cta__title" itemProp="name">
          <Link className="cc-image-card-with-cta__link" to={href}>
            {title}
          </Link>
        </TitleElement>
        {description && (
          <RichText
            className="cc-image-card-with-cta__description"
            itemProp="abstract"
          >
            {description}
          </RichText>
        )}
        {href && linkText && <CTALink href={href} text={linkText} />}
      </div>
    </article>
  );
};

export default ImageCardWithCTA;
