import React from 'react';
import cx from 'classnames';

import FileDownload from 'FileDownload';
import FormattedDate from 'FormattedDate';

type ResultItemMetaProps = {
  date?: string;
  lastUpdated?: string;
  showType?: boolean;
  type?: string | null;
};

export type FileMetaProps = {
  type: string;
  size: string;
};

export type CardBaseProps = {
  authors?: string[];
  className?: string;
  description?: string;
  href: string;
  id?: string;
  meta?: ResultItemMetaProps;
  title: string;
};

export type ResultItemProps = CardBaseProps & {
  fileMeta?: FileMetaProps;
  type?: 'content' | 'file' | 'taxonomy_term';
};

export const ResultsItem = ({
  authors,
  className,
  description,
  fileMeta,
  href,
  id,
  meta,
  title,
  type
}: ResultItemProps) => {
  const classNames = cx('result-item', {
    [`${className}`]: className
  });

  return (
    <article className={classNames} id={id}>
      {meta && (meta.type || meta.date) && (
        <div className="result-item__meta">
          {meta.showType && (
            <span className="result-item__meta-type">
              {meta.type}
              &nbsp;
            </span>
          )}
          {meta.date && (
            <span className="result-item__meta-date">
              <FormattedDate dateString={meta.date} />
              &nbsp;
            </span>
          )}
          {meta.lastUpdated && (
            <span className="result-item__meta-last-updated">
              Updated <FormattedDate dateString={meta.lastUpdated} />
            </span>
          )}
        </div>
      )}
      <h3 className="result-item__title">
        {type === 'file' ? (
          `${title}`
        ) : (
          <a href={href} className="result-item__link">
            {title}
          </a>
        )}
      </h3>
      {type === 'file' && (
        <FileDownload
          className="result-item__file-meta"
          href={href}
          name={title}
          size={fileMeta.size}
          type={fileMeta.type}
        />
      )}
      {description && (
        <div
          className="result-item__description"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}
      {authors && (
        <dl className="card__authors">
          <dt className="card__authors-label">Author</dt>
          {authors?.map(author => (
            <dd key={author} className="card__author">
              {author}
            </dd>
          ))}
        </dl>
      )}
    </article>
  );
};

export default ResultsItem;
