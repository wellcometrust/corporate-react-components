import React from 'react';
import cx from 'classnames';

import FormattedDate from 'FormattedDate';
import ImageElement from 'Image/ImageElement';

import { sanitizeHtml } from 'utils/sanitize-html';

type CardProps = {
  authors?: string[];
  className?: string;
  date?: string;
  description?: string;
  href: string;
  id?: string;
  imageAlt: string;
  imageHeight?: string;
  imageSrc: string;
  imageSrcSet?: string;
  imageWidth?: string;
  metaLabel?: string;
  title: string;
  variant:
    | 'fact_card'
    | 'image_card'
    | 'horizontal_card'
    | 'link_card_cta_link'
    | 'link_list'
    | 'mid_page_card'
    | 'text_list'
    | 'vertical_card';
};

const cardImageSizesDefault =
  '(min-width: 1494px) 420px, (min-width: 1024px) 27vw, (min-width: 768px) 37vw, 90vw';

export const Card = ({
  authors,
  className,
  date,
  description,
  href,
  id,
  imageAlt,
  imageHeight,
  imageSrc,
  imageSrcSet,
  imageWidth,
  metaLabel,
  title,
  variant
}: CardProps) => {
  const classNames = cx('cc-card', {
    [`${className}`]: className
  });

  const isHorizontal = variant === 'horizontal_card';
  const isVertical = variant === 'vertical_card' || variant === 'mid_page_card';

  return (
    <article className={classNames} id={id}>
      <div className="cc-card__image">
        <ImageElement
          alt={imageAlt}
          height={imageHeight}
          sizes={cardImageSizesDefault}
          src={imageSrc}
          srcSet={imageSrcSet}
          width={imageWidth}
        />
      </div>
      <div className="cc-card__content">
        {isHorizontal && metaLabel && (
          <p className="cc-card__type">{metaLabel}</p>
        )}
        <h3 className="cc-card__title">
          <a href={href} className="cc-card__link" target="_self">
            {title}
          </a>
        </h3>
        {isHorizontal && (authors || date) && (
          <div className="cc-card__meta">
            {isHorizontal && authors && (
              <dl className="cc-card__authors">
                <dt className="cc-card__authors-label">Author</dt>
                {authors?.map(author => (
                  <dd key={author} className="cc-card__author">
                    {author}
                  </dd>
                ))}
              </dl>
            )}
            {isHorizontal && date && (
              <time className="cc-card__date">
                <FormattedDate dateString={date} />
              </time>
            )}
          </div>
        )}
        {isVertical && description && (
          <div
            className="cc-card__description"
            dangerouslySetInnerHTML={{ __html: sanitizeHtml(description) }}
          />
        )}
      </div>
    </article>
  );
};

export default Card;
