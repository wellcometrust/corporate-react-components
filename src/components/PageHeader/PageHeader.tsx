/**
 * @deprecated PageHeader is to be moved to corporate-react
 *
 * @see {@link https://github.com/wellcometrust/corporate/issues/8948}
 */
import React from 'react';
import cx from 'classnames';

import FormattedDate from 'FormattedDate';
import Grid from 'Grid';
import PageTitle from 'PageTitle';
import RichText from 'RichText';

type PageHeaderProps = {
  background?: 'blue' | 'transparent';
  imageElement?: React.ReactElement;
  imageLocation?: 'top' | 'bottom';
  children?: React.ReactNode;
  className?: string;
  datePublished?: string;
  dateUpdated?: string;
  hideHeaderContent?: boolean;
  meta?: string;
  metaLabel?: string;
  share?: React.ReactNode;
  standfirst?: string;
  title: string;
};

export const PageHeader = ({
  background = 'transparent',
  imageElement,
  imageLocation = 'top',
  children,
  className,
  datePublished,
  dateUpdated,
  hideHeaderContent = false,
  meta,
  metaLabel,
  share,
  standfirst,
  title
}: PageHeaderProps) => {
  const classNames = {
    header: cx('cc-page-header', {
      [`cc-page-header--${background}`]: background,
      [`${className}`]: className
    }),
    headerMain: cx('cc-page-header__main', {
      'cc-page-header__main--title-only': !(standfirst || children)
    })
  };

  return (
    !hideHeaderContent && (
      <div className={classNames.header}>
        {imageLocation === 'top' && imageElement}
        <div className="cc-page-header__container">
          <Grid>
            <div className={classNames.headerMain}>
              <PageTitle meta={meta} metaLabel={metaLabel} title={title} />
            </div>
            {(datePublished || dateUpdated || share) && (
              <div className="cc-page-header__tools">
                {/* TODO: Add breadcrumb here
            <div className="cc-page-header__breadcrumb">Breadcrumb</div> */}
                {(datePublished || dateUpdated) && (
                  <dl className="cc-page-header__dates">
                    {datePublished && (
                      <>
                        <dt className="cc-page-header__date-label">
                          Published
                        </dt>
                        <dd className="cc-page-header__date">
                          <time>
                            <FormattedDate dateString={datePublished} />
                          </time>
                        </dd>
                      </>
                    )}
                    {dateUpdated && (
                      <>
                        <dt className="cc-page-header__date-label">
                          Last updated
                        </dt>
                        <dd className="cc-page-header__date">
                          <time>
                            <FormattedDate dateString={dateUpdated} />
                          </time>
                        </dd>
                      </>
                    )}
                  </dl>
                )}
                {share && <div className="cc-page-header__share">{share}</div>}
              </div>
            )}
          </Grid>
        </div>
        {imageLocation === 'bottom' && imageElement}
        {(standfirst || children) && (
          <Grid>
            {standfirst && (
              <div className="cc-page-header__standfirst">
                <RichText>{standfirst}</RichText>
              </div>
            )}
            {children && <div className="cc-page-header__misc">{children}</div>}
          </Grid>
        )}
      </div>
    )
  );
};

export default PageHeader;
