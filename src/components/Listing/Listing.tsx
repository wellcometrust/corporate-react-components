import React, { Children, cloneElement } from 'react';
import cx from 'classnames';

import ListingLink from './ListingLink';

type ListingProps = {
  as?: 'div' | 'ol' | 'ul';
  children: JSX.Element | JSX.Element[];
  className?: string;
  variant?:
    | 'fact_card'
    | 'horizontal_card'
    | 'image_card'
    | 'link_card_cta_link'
    | 'link_list'
    | 'mid_page_card'
    | 'text_list'
    | 'vertical_card';
};

// Specific style variations for card listings
const variantMapping = {
  horizontal_card: 'cc-card-listing cc-card-listing--horizontal',
  image_card: 'cc-card-listing cc-card-listing--horizontal',
  link_card_cta_link: 'cc-card-listing cc-card-listing--horizontal',
  link_list: 'cc-listing',
  mid_page_card: 'cc-card-listing',
  fact_card: 'cc-card-listing cc-card-listing--horizontal',
  text_list: 'cc-listing',
  vertical_card: 'cc-card-listing'
};

export const Listing = ({
  as = 'div',
  children,
  className,
  variant = 'link_list'
}: ListingProps) => {
  const Element = variant === 'link_list' ? 'ul' : as;
  const classNames = cx(variantMapping[variant], {
    [`${className}`]: className
  });

  const childrenWithProps = Children.map(
    children,
    child =>
      child &&
      cloneElement(child, {
        variant
      })
  );

  return <Element className={classNames}>{childrenWithProps}</Element>;
};

export default Listing;
export { ListingLink };
