import React, { forwardRef, Ref } from 'react';

import RouterLinkWrapper from 'RouterLinkWrapper';

type LinkProps = {
  className?: string;
  to: string;
  children: React.ReactNode;

  // allows the Link to accept spread props (we should aim to remove this)
  [key: string]: string | React.ReactNode;
};

/**
 * Displays an <a> tag with extra attributes depedendent on whether
 * href is an external domain.
 *
 * @param {ReactElement} children
 * @param {string}       className
 * @param {string}       to          Destination URL
 * @returns {ReactElement}
 * @constructor
 */
export const Link = forwardRef(
  (
    { children, className, to, ...props }: LinkProps,
    ref: Ref<HTMLAnchorElement>
  ) => {
    return (
      <RouterLinkWrapper href={to} ref={ref}>
        <a className={className} href={to} {...props}>
          {children}
        </a>
      </RouterLinkWrapper>
    );
  }
);

export default Link;
