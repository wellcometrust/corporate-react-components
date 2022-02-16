import React from 'react';
import cx from 'classnames';

import Card from 'Card';
import { ListingLink } from 'Listing/ListingLink/ListingLink';
import FactCard from 'FactCard';
import TextCard from 'TextCard';
import ImageCardWithCTA from 'ImageCardWithCTA';

type ListingElementProps = {
  authors?: string[];
  className?: string;
  date?: string;
  dateUpdated?: string;
  description?: string;
  fileSize: string;
  fileType: string;
  href: string;
  id?: string;
  imageAlt: string;
  imageHeight?: string;
  imageSrc: string;
  imageSrcSet?: string;
  imageWidth?: string;
  hasMetaLabel?: boolean;
  linkText?: string;
  metaLabel?: string;
  title: string;
  type?: 'content' | 'file' | 'taxonomy_term';
  variant:
    | 'fact_card'
    | 'horizontal_card'
    | 'link_card_cta_link'
    | 'link_list'
    | 'mid_page_card'
    | 'text_list'
    | 'vertical_card';
};

const variantElement = {
  horizontal_card: Card,

  /**
   * todo: Build + integrate Image card with CTA link component
   *
   * @see {@link https://github.com/wellcometrust/corporate/issues/7771}
   */
  fact_card: FactCard,
  link_card_cta_link: ImageCardWithCTA,
  link_list: ListingLink,
  mid_page_card: Card,
  text_list: TextCard,
  vertical_card: Card
};

export const ListingElement = ({
  authors,
  className,
  date,
  dateUpdated,
  description,
  fileSize,
  fileType,
  hasMetaLabel,
  href,
  id,
  imageAlt,
  imageHeight,
  imageSrc,
  imageSrcSet,
  imageWidth,
  linkText,
  metaLabel,
  title,
  type,
  variant,
  ...otherProps
}: ListingElementProps) => {
  const classNames = cx({
    'cc-card--horizontal': variant === 'horizontal_card',
    'cc-card--vertical':
      variant === 'vertical_card' || variant === 'mid_page_card',
    [`${className}`]: className
  });

  const Element = variantElement[variant];

  // TODO #6711, #6715: pass through additional props for populating text listing items / cards
  return (
    <Element
      authors={authors}
      className={classNames}
      date={date}
      dateUpdated={dateUpdated}
      description={description}
      fileSize={fileSize}
      fileType={fileType}
      href={href}
      id={id}
      imageAlt={imageAlt}
      imageHeight={imageHeight}
      imageSrc={imageSrc}
      imageSrcSet={imageSrcSet}
      imageWidth={imageWidth}
      linkText={linkText}
      hasMetaLabel={hasMetaLabel}
      metaLabel={metaLabel}
      title={title}
      type={type}
      variant={variant}
      {...otherProps}
    />
  );
};

export default ListingElement;
