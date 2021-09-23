import React, { forwardRef, Ref } from 'react';
import cx from 'classnames';

import VisuallyHidden from 'VisuallyHidden';

type FileDownloadProps = {
  className?: string;
  documentSubType?: string;
  documentType?: string;
  href: string;
  label?: string;
  name?: string;
  size?: string;
  type: string;
};

export const FileDownload = forwardRef(
  (
    {
      className,
      documentSubType,
      documentType,
      href,
      label = 'Download',
      name,
      size,
      type
    }: FileDownloadProps,
    ref: Ref<HTMLAnchorElement>
  ) => {
    const classNames = cx('cc-file-download', {
      [className]: className
    });

    return (
      <div className={classNames}>
        <a
          className="cc-file-download__link"
          // todo: #7814
          data-file-type={documentType}
          data-report-type={documentSubType}
          download
          href={href}
          ref={ref}
        >
          {label}
          <VisuallyHidden>{` ${name}`}</VisuallyHidden>
        </a>
        <span className="cc-file-download__meta">
          &nbsp;
          {type}
          &nbsp;
          {size}
        </span>
      </div>
    );
  }
);

export default FileDownload;
