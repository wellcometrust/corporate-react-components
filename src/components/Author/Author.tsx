import React from 'react';
import cx from 'classnames';

import { ImageElement } from 'Image';
import Link from 'Link';

export type AuthorProps = {
  className?: string;
  imageSizes?: string;
  imageSrc?: string;
  imageSrcSet?: string;
  layoutVariant?: 'horizontal';
  jobTitle?: string;
  links?: {
    title: string;
    url: string;
  }[];
  name: string;
  organisation?: string;
};

export const Author = ({
  className,
  imageSizes,
  imageSrc,
  imageSrcSet,
  layoutVariant,
  jobTitle,
  links,
  name,
  organisation
}: AuthorProps) => {
  const classNames = cx('cc-author', {
    [`cc-author--${layoutVariant}`]: layoutVariant,
    [className]: className
  });

  return (
    <div className={classNames} itemScope itemType="http://schema.org/Person">
      {(imageSrc || imageSrcSet) && (
        <figure className="cc-author__image">
          <ImageElement
            itemProp="image"
            sizes={imageSizes}
            src={imageSrc}
            srcSet={imageSrcSet}
            alt={`A photograph of the author, ${name}.`}
          />
        </figure>
      )}
      <div className="cc-author__body">
        <h2 className="cc-author__name" itemProp="name">
          {name}
        </h2>
        {jobTitle && (
          <p className="cc-author__byline" itemProp="jobTitle">
            {jobTitle}
          </p>
        )}
        {organisation && (
          <p className="cc-author__byline" itemProp="memberOf">
            {organisation}
          </p>
        )}
        {!!links?.length && (
          <ul className="cc-author__links">
            {links.map(link => (
              <li
                className="cc-author__link-item"
                key={`${name}-link-${link.url}`}
              >
                <Link className="cc-author__link" to={link.url}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Author;
