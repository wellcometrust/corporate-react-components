import React, { forwardRef, Ref } from 'react';
import cx from 'classnames';

import { ImageElement } from 'Image';
import Link from 'Link';
import ReadTime from 'ReadTime';

type ImageCardProps = {
  authors?: string[];
  className?: string;
  date?: string;
  href: string;
  imageAlt: string;
  imageHeight?: string;
  imageSizes?: string;
  imageSrc: string;
  imageSrcSet?: string;
  imageWidth?: string;
  layoutVariant?: 'listing';
  metaLabel?: string;
  readTime?: string;
  title: string;
  titleAs?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export const ImageCard = forwardRef(
  (
    {
      authors,
      className,
      date,
      href,
      imageAlt,
      imageHeight,
      imageSizes = '(min-width: 1500px) 400px, (min-width: 1024px) calc(30vw - 48px), (min-width: 768px) calc(30vw - 40px), 30vw',
      imageSrc,
      imageSrcSet,
      imageWidth,
      layoutVariant,
      metaLabel,
      readTime,
      title,
      titleAs = 'h3'
    }: ImageCardProps,
    ref: Ref<HTMLAnchorElement>
  ) => {
    const TitleElement = titleAs;
    const classNames = cx('cc-image-card', {
      [`cc-image-card--${layoutVariant}`]: layoutVariant,
      'cc-image-card--standard': !layoutVariant,
      [className]: className
    });

    return (
      <article
        className={classNames}
        itemScope
        itemType="https://schema.org/Article"
      >
        <div className="cc-image-card__figure">
          <figure className="cc-image-card__image">
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
        <div className="cc-image-card__body">
          {(metaLabel || authors?.length) && (
            <span className="cc-image-card__meta">
              {metaLabel && (
                <span className="cc-image-card__meta-item cc-image-card__meta-item--flag cc-image-card__meta-item--label">
                  {metaLabel}
                </span>
              )}
              {authors?.length > 0 && (
                <dl className="cc-image-card__meta-item cc-image-card__meta-item--author cc-image-card__authors">
                  <dt className="cc-image-card__authors-label">Author</dt>
                  {authors?.map(author => (
                    <dd
                      key={author}
                      className="cc-image-card__author"
                      itemProp="author"
                    >
                      {author}
                    </dd>
                  ))}
                </dl>
              )}
            </span>
          )}
          <TitleElement className="cc-image-card__title" itemProp="name">
            <Link className="cc-image-card__link" to={href} ref={ref}>
              {title}
            </Link>
          </TitleElement>
          {date && <ReadTime date={date} readTime={readTime} />}
        </div>
      </article>
    );
  }
);

export default ImageCard;
