import React from 'react';
import cx from 'classnames';

import { ImageElement } from 'Image';
import Link from 'Link';

import getLinkLabel from 'utils/get-link-label';

export type AuthorProps = {
  className?: string;
  imageSizes?: string;
  imageSrc?: string;
  imageSrcSet?: string;
  jobTitle?: string;
  links?: {
    title: string;
    url: string;
  }[];
  name: string;
  organisation?: string;
  titleAs?: 'h2' | 'p';
};

export const Author = ({
  className,
  imageSizes,
  imageSrc,
  imageSrcSet,
  jobTitle,
  links,
  name,
  organisation,
  titleAs = 'h2'
}: AuthorProps) => {
  const TitleElement = titleAs;
  const classNames = cx('cc-author', {
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
        <TitleElement className="cc-author__name" itemProp="name">
          {name}
        </TitleElement>
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
                <Link
                  aria-label={getLinkLabel(name, link)}
                  className="cc-author__link"
                  to={link.url}
                >
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
