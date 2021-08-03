import React from 'react';
import cx from 'classnames';

import parseHtml from 'utils/parse-html';
import { ImageElement } from 'Image';

export type PersonProps = {
  description?: string;
  imageSizes?: string;
  imageSrc?: string;
  imageSrcSet?: string;
  jobTitle: string;
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
      <figure className="cc-person__image">
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
        <h3 className="cc-person__title" itemProp="name">
          {name}
        </h3>
        <p className="cc-person__title cc-person__subtitle" itemProp="jobTitle">
          {jobTitle}
        </p>
        {organisation && (
          <p
            className="cc-person__title cc-person__subtitle"
            itemProp="memberOf"
          >
            {organisation}
          </p>
        )}
      </div>
      {(description || !!links?.length) && (
        <div className="cc-person__body">
          {description && (
            <div className="cc-person__description">
              {parseHtml(description)}
            </div>
          )}
          {!!links?.length && (
            <ul className="cc-person__links">
              {links.map(link => (
                <li
                  className="cc-person__link-item"
                  key={`${name}-link-${link.url}`}
                >
                  <a href={link.url}>{link.title}</a>
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
