import React from 'react';

import CTALink from 'CTALink';
import { ImageElement } from 'Image';
import Link from 'Link';
import ReadTime from 'ReadTime';
import RichText from 'RichText';
import TagList, { TagProps } from 'TagList/TagList';

type FullWidthPromoProps = {
  authors?: string[];
  description?: string;
  href: string;
  imageAlt?: string;
  imageCaption?: string;
  imageCredit?: string;
  imageHeight?: string;
  imageLicence?: string;
  imageSizes?: string;
  imageSrc: string;
  imageSrcSet?: string;
  imageWidth?: string;
  linkText?: string;
  metaLabel?: string;
  readTime?: string;
  title: string;
  topics: TagProps[];
};

export const FullWidthPromo = ({
  authors,
  description,
  href,
  imageAlt,
  imageHeight,
  imageSizes = '100vw',
  imageSrc,
  imageSrcSet,
  imageWidth,
  linkText,
  metaLabel,
  readTime,
  title,
  topics
}: FullWidthPromoProps) => (
  <article
    className="cc-full-width-promo"
    itemScope
    itemType="https://schema.org/Article"
  >
    <figure className="cc-full-width-promo__image">
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
    <div className="cc-full-width-promo__container grid">
      <div className="cc-full-width-promo__content">
        {(metaLabel || authors) && (
          <div className="cc-full-width-promo__meta">
            {metaLabel && (
              <ReadTime
                className="cc-full-width-promo__read-time"
                metaLabel={metaLabel}
                readTime={readTime}
              />
            )}
            {authors?.length > 0 && (
              <dl className="cc-full-width-promo__authors">
                <dt className="cc-full-width-promo__authors-label">Author</dt>
                {authors?.map(author => (
                  <dd
                    key={author}
                    className="cc-full-width-promo__author"
                    itemProp="author"
                  >
                    {author}
                  </dd>
                ))}
              </dl>
            )}
          </div>
        )}
        <h3 className="cc-full-width-promo__title" itemProp="name">
          <Link to={href} className="cc-full-width-promo__title-link">
            {title}
          </Link>
        </h3>
        {description && (
          <RichText
            className="cc-full-width-promo__description"
            itemProp="abstract"
          >
            {description}
          </RichText>
        )}
        {linkText?.trim().length > 0 && (
          <CTALink
            className="cc-full-width-promo__link"
            href={href}
            text={linkText}
          />
        )}
        {topics && (
          <div className="cc-page-header-compact__topics">
            <TagList tags={topics} />
          </div>
        )}
      </div>
    </div>
  </article>
);

export default FullWidthPromo;
