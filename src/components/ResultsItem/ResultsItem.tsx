import React from 'react';
import cx from 'classnames';

import FileDownload from 'FileDownload';
import FormattedDate from 'FormattedDate';

import { parseHtml } from 'utils/parse-html';
import RichText from 'RichText';

type ResultItemProps = {
  children?: React.ReactNode;
  className?: string;
  description?: string;
  href: string;
  id?: string;
  meta?: {
    date?: string;
    lastUpdated?: string;
    hasType?: boolean;
    type?: string | null;
  };
  title: string;
  fileMeta?: {
    type: string;
    size: string;
  };
  type?: 'content' | 'file' | 'taxonomy_term';
};

export const ResultsItem = ({
  children,
  className,
  description,
  fileMeta,
  href,
  id,
  meta,
  title,
  type
}: ResultItemProps) => {
  const classNames = cx('cc-result-item', {
    [`${className}`]: className
  });

  return (
    <article className={classNames} id={id}>
      {meta && (meta.type || meta.date) && (
        <div className="cc-result-item__meta">
          {/* `meta.type` temporarily removed as types for search results are not correctly displayed
          Type label and date logic for cards has been moved to the app side
          therefore `itemType` prop has been permanently removed
          TODO: To be revisited for both search results AND text listings
          https://github.com/wellcometrust/corporate/issues/6730 */}
          {/* {meta.type && !['taxonomy_term'].includes(itemType) && (
            <span className="result-item__meta-type">
              {meta.type}
              &nbsp;
            </span>
          )} */}
          {/* hasType is a flag to decide if we want to show a type */}
          {meta.hasType && (
            <span className="cc-result-item__meta-type">
              {meta.type}
              &nbsp;
            </span>
          )}
          {meta.date && (
            <span className="cc-result-item__meta-date">
              <FormattedDate dateString={meta.date} />
              &nbsp;
            </span>
          )}
          {meta.lastUpdated && (
            <span className="cc-result-item__meta-last-updated">
              Updated <FormattedDate dateString={meta.lastUpdated} />
            </span>
          )}
        </div>
      )}
      <h3 className="cc-result-item__title">
        {type === 'file' ? (
          parseHtml(title)
        ) : (
          <a href={href} className="cc-result-item__link">
            {parseHtml(title)}
          </a>
        )}
      </h3>
      {type === 'file' && (
        <FileDownload
          className="cc-result-item__file-meta"
          href={href}
          name={title}
          size={fileMeta.size}
          type={fileMeta.type}
        />
      )}
      {description && (
        <RichText className="cc-result-item__description">
          {description}
        </RichText>
      )}
      {children && (
        <div className="cc-result-item__description">{children}</div>
      )}
    </article>
  );
};

export default ResultsItem;
