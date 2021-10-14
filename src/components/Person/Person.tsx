import React from 'react';
import cx from 'classnames';

import { ImageElement } from 'Image';
import Link from 'Link';
import RichText from 'RichText';

export type PersonProps = {
  className?: string;
  description?: string;
  imageSizes?: string;
  imageSrc?: string;
  imageSrcSet?: string;
  jobTitle?: string;
  layoutVariant?: 'author' | 'compact' | 'narrow';
  links?: {
    title: string;
    url: string;
  }[];
  name: string;
  organisation?: string;
  titleAs?: 'h3' | 'p';
};

export const Person = ({
  className,
  description,
  imageSizes,
  imageSrc,
  imageSrcSet,
  jobTitle,
  layoutVariant,
  links,
  name,
  organisation,
  titleAs = 'h3'
}: PersonProps) => {
  const TitleElement = titleAs;
  const shouldShowDescription = description && layoutVariant !== 'compact';
  const classNames = cx('cc-person', {
    [`cc-person--${layoutVariant}`]: layoutVariant,
    [className]: className
  });

  return (
    <div className={classNames} itemScope itemType="http://schema.org/Person">
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
        <div
          className={cx('cc-person__header', {
            [`cc-person__header--${layoutVariant}`]:
              layoutVariant && (imageSrc || imageSrcSet)
          })}
        >
          <TitleElement className="cc-person__heading" itemProp="name">
            {name}
          </TitleElement>
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
        {(shouldShowDescription || !!links?.length) && (
          <div className="cc-person__body">
            {shouldShowDescription && (
              <RichText className="cc-person__description">
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
};

export default Person;
