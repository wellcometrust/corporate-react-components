import React from 'react';

import { ImageElement } from 'Image';
import Link from 'Link';

export type AuthorProps = {
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
};

export const Author = ({
  imageSizes,
  imageSrc,
  imageSrcSet,
  jobTitle,
  links,
  name,
  organisation
}: AuthorProps) => (
  <div className="cc-author" itemScope itemType="http://schema.org/Person">
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

export default Author;
