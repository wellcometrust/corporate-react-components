/**
 * @deprecated PageHeaderCompact is to be moved to corporate-react
 *
 * @see {@link https://github.com/wellcometrust/corporate/issues/8948}
 */
import React from 'react';

import Author, { AuthorProps } from 'Author/Author';
import { ImageElement } from 'Image';
import PageTitle from 'PageTitle';
import ReadTime from 'ReadTime';
import RichText from 'RichText';
import SocialShare from 'SocialShare';
import TagList, { TagProps } from 'TagList/TagList';

type AuthorPropsExtend = AuthorProps & {
  id: string;
};

type PageHeaderCompactProps = {
  authors: AuthorPropsExtend[];
  date?: string;
  imageAlt?: string;
  imageCaption?: string;
  imageCredit?: string;
  imageLicence?: string;
  imageSizes?: string;
  imageSrc?: string;
  imageSrcSet?: string;
  metaLabel?: string;
  readTime?: string;
  socialUrl: string;
  standfirst: string;
  title: string;
  topics: TagProps[];
};

export const PageHeaderCompact = ({
  authors,
  date,
  imageAlt,
  imageCaption,
  imageCredit,
  imageLicence,
  imageSizes = '(min-width: 1494px) 648px, (min-width: 1024px) 45vw, (min-width: 768px) 90vw, 100vw',
  imageSrc,
  imageSrcSet,
  metaLabel,
  readTime,
  socialUrl,
  standfirst,
  title,
  topics
}: PageHeaderCompactProps) => {
  console.log('readTime', readTime);
  return (
    <header className="cc-page-header-compact">
      <div className="cc-page-header-compact__main cc-page-header-compact__section cc-page-header-compact__section--main">
        <PageTitle metaLabel={metaLabel} title={title} />
        <div className="cc-page-header-compact__standfirst">
          <RichText>{standfirst}</RichText>
        </div>
      </div>
      {(!!imageSrc || (imageSrcSet && imageSizes?.trim().length)) && (
        <figure className="cc-page-header-compact__image cc-page-header-compact__section cc-page-header-compact__section--main">
          <ImageElement
            alt={imageAlt}
            sizes={imageSizes}
            src={imageSrc}
            srcSet={imageSrcSet}
          />
          {(imageCaption || imageCredit || imageLicence) && (
            <figcaption className="cc-media__caption">
              <div className="cc-media__caption-content">
                {imageCaption && (
                  <RichText className="cc-media__caption-detail">
                    {imageCaption}
                  </RichText>
                )}
                {imageCredit && (
                  <RichText className="cc-media__credit">
                    {`Credit: ${imageCredit}`}
                  </RichText>
                )}
                {imageLicence && (
                  <RichText className="cc-media__license">
                    {imageLicence}
                  </RichText>
                )}
              </div>
            </figcaption>
          )}
        </figure>
      )}
      {(authors || !!topics?.length) && (
        <div className="cc-page-header-compact__aside cc-page-header-compact__section cc-page-header-compact__section--sidebar">
          {authors && (
            <div className="cc-page-header-compact__authors">
              {authors.map(author => (
                <Author
                  imageSrc={author.imageSrc}
                  imageSrcSet={author.imageSrcSet}
                  jobTitle={author.jobTitle}
                  links={author.links}
                  key={`author-${author.id}`}
                  name={`${author.name}`}
                  organisation={author.organisation}
                />
              ))}
            </div>
          )}
          {!!topics?.length && (
            <div className="cc-page-header-compact__topics">
              <TagList tags={topics} />
            </div>
          )}
        </div>
      )}
      {date && (
        <div className="cc-page-header-compact__tray cc-page-header-compact__section cc-page-header-compact__section--main">
          <ReadTime date={date} readTime={readTime} />
          <SocialShare url={socialUrl} body={standfirst} title={title} />
        </div>
      )}
    </header>
  );
};

export default PageHeaderCompact;
