import React from 'react';

import DateTime from 'DateTime/DateTime';

type ResultItemMetaProps = {
  date?: string;
  lastUpdated?: string;
  type?: string | null;
};

type ResultItemFileMetaProps = {
  type: string;
  size: string;
};

export type ResultItemProps = {
  fileMeta?: ResultItemFileMetaProps;
  href: string;
  meta?: ResultItemMetaProps;
  text?: string;
  title: string;
  type?: 'content' | 'file' | 'taxonomy_term';
};

export const ResultsItem = ({
  fileMeta,
  href,
  meta,
  text,
  title,
  type
}: ResultItemProps) => (
  <article className="result-item">
    {meta && (
      <div className="result-item__meta">
        <span className="result-item__meta-type">{meta.type}</span>
        <span className="result-item__meta-date">
          &nbsp;
          <DateTime dateString={meta.date} />
        </span>
        {meta.lastUpdated && (
          <span className="result-item__meta-last-updated">
            Updated <DateTime dateString={meta.lastUpdated} />
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
      <div className="result-item__file-meta">
        <a href={href} className="result-item__file-meta-download">
          Download
        </a>
        <span className="result-item__file-meta-size">
          &nbsp;
          {fileMeta.type}
          &nbsp;
          {fileMeta.size}
        </span>
      </div>
    )}
    <p className="result-item__text">{text}</p>
  </article>
);

export default ResultsItem;
