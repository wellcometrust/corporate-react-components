import React, { forwardRef, Ref } from 'react';
import cx from 'classnames';

import FileDownload from 'FileDownload';
import FormattedDate from 'FormattedDate';
import { format, isValid } from 'date-fns';

import { parseHtml } from 'utils/parse-html';
import RichText from 'RichText';

type TextCardProps = {
  children?: React.ReactNode;
  className?: string;
  date?: string;
  dateUpdated?: string;
  description?: string;
  documentSubType?: string;
  documentType?: string;
  fileSize?: string;
  fileType?: string;
  hasMetaLabel?: boolean;
  href: string;
  id?: string;
  metaLabel?: string;
  title: string;
  titleAs?: 'h2' | 'h3';
  type?: 'content' | 'file' | 'job_card' | 'taxonomy_term';
};

const getJobClosingDate = (date: string) => {
  const dateObject = new Date(date);
  dateObject.setDate(dateObject.getDate() - 1);

  return isValid(dateObject)
    ? `${format(dateObject, 'd MMMM yyyy')} 23:59`
    : null;
};

export const TextCard = forwardRef(
  (
    {
      children,
      className,
      date,
      dateUpdated,
      description,
      documentSubType,
      documentType,
      fileSize,
      fileType,
      hasMetaLabel,
      href,
      id,
      metaLabel,
      title,
      titleAs = 'h3',
      type
    }: TextCardProps,
    ref: Ref<HTMLAnchorElement>
  ) => {
    const TitleElement = titleAs;
    const classNames = cx('cc-text-card', {
      [className]: className
    });

    const jobClosingDate = getJobClosingDate(date);

    return (
      <article className={classNames} id={id}>
        {(metaLabel || date) && type !== 'job_card' && (
          <div className="cc-text-card__meta">
            {/* `metaLabel` temporarily removed as types for search results are not correctly displayed
          Type label and date logic for cards has been moved to the app side
          therefore `itemType` prop has been permanently removed
          TODO: To be revisited for both search results AND text listings
          https://github.com/wellcometrust/corporate/issues/6730 */}
            {/* {metaLabel && !['taxonomy_term'].includes(itemType) && (
            <span className="cc-text-card__meta-label">
              {metaLabel}
              &nbsp;
            </span>
          )} */}
            {/* hasMetaLabel is a flag to decide if we want to show a type */}
            {hasMetaLabel && (
              <span className="cc-text-card__meta-label">
                {metaLabel}
                &nbsp;
              </span>
            )}
            {date && (
              <span className="cc-text-card__date">
                <FormattedDate dateString={date} />
                &nbsp;
              </span>
            )}
            {dateUpdated && (
              <span className="cc-text-card__date-updated">
                Updated <FormattedDate dateString={dateUpdated} />
              </span>
            )}
          </div>
        )}
        {title && (
          <TitleElement className="cc-text-card__title">
            {type === 'file' ? (
              parseHtml(title)
            ) : (
              <a href={href} className="cc-text-card__link" ref={ref}>
                {parseHtml(title)}
              </a>
            )}
          </TitleElement>
        )}
        {type === 'file' && (
          <FileDownload
            className="cc-text-card__file-meta"
            documentSubType={documentSubType}
            documentType={documentType}
            href={href}
            name={title}
            ref={ref}
            size={fileSize}
            type={fileType}
          />
        )}
        {description && (
          <RichText className="cc-text-card__description">
            {description}
          </RichText>
        )}
        {children && (
          <div className="cc-text-card__description">{children}</div>
        )}
        {jobClosingDate && type === 'job_card' && (
          <p className="cc-text-card__closing-date">
            Closing date:
            <span>
              &nbsp;
              {jobClosingDate}
            </span>
          </p>
        )}
      </article>
    );
  }
);

export default TextCard;
