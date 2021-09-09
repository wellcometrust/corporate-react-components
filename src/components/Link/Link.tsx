import React, { useState, useEffect } from 'react';

import RouterLinkWrapper from 'RouterLinkWrapper';
import ExternalLinkMarker from './ExternalLinkMarker';

type LinkProps = {
  className?: string;
  to: string;
  children: React.ReactNode;

  // allows the Link to accept spread props (we should aim to remove this)
  [key: string]: string | React.ReactNode;
};

/**
 * Test if a string ends with a given filename extension
 */
const isFileLink = (str: string) =>
  /\.(csv|doc|docm|docx|pdf|ppt|pptm|pptx|xls|xlsm|xlsx)$/g.test(str);

/**
 * Detect whether a given string is going to an external domain
 *
 * @param { string } url
 * @returns { boolean }
 */
const isExternalLink = (url: string) => {
  const isRelativeUrl = ['#', '/', '?'].includes(url.charAt(0));

  // Else test whether the current origin === destination URL
  const { origin } = window.location;
  const destination = url
    .replace('http://', '')
    .replace('https://', '')
    .split('/')[0];

  return !(origin === destination || isRelativeUrl);
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
export const Link = ({ children, className, to, ...props }: LinkProps) => {
  const [isExternal, setExternal] = useState(false);
  const isFile = isFileLink(to);

  // Ensures 'window' is present
  useEffect(() => {
    if (to) {
      setExternal(isExternalLink(to));
    }
  }, []);

  return isExternal || isFile ? (
    <a
      className={className}
      download={isFile}
      href={to}
      rel="noopener noreferrer"
      target="_blank"
      {...props}
    >
      {children}
      {isExternal && !isFile && <ExternalLinkMarker />}
    </a>
  ) : (
    <RouterLinkWrapper href={to}>
      <a className={className} href={to} {...props}>
        {children}
      </a>
    </RouterLinkWrapper>
  );
};

export default Link;
export { ExternalLinkMarker };
