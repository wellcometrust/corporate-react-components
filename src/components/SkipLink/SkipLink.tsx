/**
 * @deprecated SkipLink is to be moved into corporate-react
 *
 * @see {@link https://github.com/wellcometrust/corporate/issues/8967}
 */
import React from 'react';
import cx from 'classnames';

type SkipLinkProps = {
  className?: string;
  href: string;
  position?: 'static' | 'float';
  text: string;
};

export const SkipLink = ({
  className,
  href,
  position = 'static',
  text
}: SkipLinkProps) => {
  const classNames = {
    wrapper: cx('cc-skip-link', {
      [className]: className
    }),
    link: cx('cc-skip-link__link', {
      'cc-skip-link__link--float': position === 'float'
    })
  };

  return (
    <div className={classNames.wrapper}>
      <a className={classNames.link} href={href}>
        {text}
      </a>
    </div>
  );
};

export default SkipLink;
