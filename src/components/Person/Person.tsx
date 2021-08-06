import React from 'react';
import cx from 'classnames';

import { ImageElement } from 'Image';
import Link from 'Link';
import RichText from 'RichText';

export type PersonProps = {
  description?: string;
  imageSizes?: string;
  imageSrc?: string;
  imageSrcSet?: string;
  jobTitle?: string;
  layoutVariant: 'author' | 'full-width' | 'narrow' | 'team';
  links?: {
    title: string;
    url: string;
  }[];
  name: string;
  organisation?: string;
};

export const Person = ({
  description,
  imageSizes,
  imageSrc,
  imageSrcSet,
  jobTitle,
  layoutVariant,
  links,
  name,
  organisation
}: PersonProps) => (
  <div
    className={cx('cc-person', {
      [`cc-person--${layoutVariant}`]: layoutVariant
    })}
    itemScope
    itemType="http://schema.org/Person"
  >
    {(imageSrc || imageSrcSet) && (
      <figure
        className={cx('cc-person__image', {
          [`cc-person__image--${layoutVariant}`]: layoutVariant
        })}
      >
        <ImageElement
          itemProp="image"
          sizes={imageSizes}
          src={imageSrc}
          srcSet={imageSrcSet}
          alt={`A photograph of the person, ${name}.`}
        />
      </figure>
    )}
    <div className="cc-person__wrapper">
      <div className="cc-person__header">
        <h3 className="cc-person__heading" itemProp="name">
          {name}
        </h3>
        {jobTitle && (
          <p
            className="cc-person__heading cc-person__subheading"
            itemProp="jobTitle"
          >
            {jobTitle}
          </p>
        )}
        {organisation && (
          <p
            className="cc-person__heading cc-person__subheading"
            itemProp="memberOf"
          >
            {organisation}
          </p>
        )}
      </div>
      {(description || !!links?.length) && (
        <div className="cc-person__body">
          {description && (
            <RichText className="cc-person__description" itemProp="abstract">
              {description}
            </RichText>
          )}
          {!!links?.length && (
            <ul className="cc-person__links">
              {links.map(link => (
                <li
                  className="cc-person__link-item"
                  key={`${name}-link-${link.url}`}
                >
                  <Link className="cc-person__link" to={link.url}>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  </div>
);

export default Person;
