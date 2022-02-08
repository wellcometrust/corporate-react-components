import React from 'react';
import cx from 'classnames';
import FormattedDate from 'FormattedDate';

type ReadTimeProps = {
  className?: string;
  date?: string;
  metaLabel?: string;
  readTime?: string;
};

export const ReadTime = ({
  className,
  date,
  metaLabel,
  readTime
}: ReadTimeProps) => {
  return (
    <div className={cx('cc-read-time', { [className]: className })}>
      {date && (
        <time dateTime={date} itemProp="datePublished">
          <FormattedDate dateString={date} />
        </time>
      )}
      {metaLabel && <span>{metaLabel}</span>}
      {readTime && <span className="cc-read-time__time">{readTime}</span>}
    </div>
  );
};

export default ReadTime;
