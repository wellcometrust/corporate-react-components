import React from 'react';
import cx from 'classnames';

import { ImageElement } from 'Image';
import Link from 'Link';
import ReadTime from 'ReadTime';
import RichText from 'RichText';

type FeaturedPromoProps = {
  authors?: string[];
  className?: string;
  date?: string;
  description?: string;
  href: string;
  imageAlt: string;
  imageHeight?: string;
  imageSizes?: string;
  imageSrc: string;
  imageSrcSet?: string;
  imageWidth?: string;
  metaLabel?: string;
  readTime?: string;
  title: string;
  titleAs?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export const FeaturedPromo = ({
  authors,
  className,
  date,
  description,
  href,
  imageAlt,
  imageHeight,
  imageSizes = '(min-width: 1500px) 672px, (min-width: 1024px) 45vw, (min-width: 768px) 37.5vw, 90vw',
  imageSrc,
  imageSrcSet,
  imageWidth,
  metaLabel,
  readTime,
  title,
  titleAs = 'h3'
}: FeaturedPromoProps) => {
  const TitleElement = titleAs;
  const classNames = cx('cc-featured-promo', {
    [className]: className
  });

  return (
    <article
      className={classNames}
      itemScope
      itemType="https://schema.org/Article"
    >
      <div className="cc-featured-promo__figure">
        <figure className="cc-featured-promo__image">
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
      <div className="cc-featured-promo__body">
        <span className="cc-featured-promo__meta">
          {metaLabel && (
            <span className="cc-featured-promo__meta-item cc-featured-promo__meta-item--flag cc-featured-promo__meta-item--label">
              {metaLabel}
            </span>
          )}
          {authors?.length > 0 && (
            <dl className="cc-featured-promo__meta-item cc-featured-promo__meta-item--author cc-featured-promo__authors">
              <dt className="cc-featured-promo__authors-label">Author</dt>
              {authors?.map(author => (
                <dd
                  key={author}
                  className="cc-featured-promo__author"
                  itemProp="author"
                >
                  {author}
                </dd>
              ))}
            </dl>
          )}
        </span>
        <TitleElement className="cc-featured-promo__title" itemProp="name">
          <Link className="cc-featured-promo__link" to={href}>
            {title}
          </Link>
        </TitleElement>
        {date && (
          <ReadTime
            className="cc-featured-promo__date"
            date={date}
            readTime={readTime}
          />
        )}
        {description && (
          <RichText
            className="cc-featured-promo__description"
            itemProp="abstract"
          >
            {description}
          </RichText>
        )}
      </div>
    </article>
  );
};

export default FeaturedPromo;
