// polyfill and type definitions for String.prototype.replaceAll()
import 'ts-replace-all';

import xss, { escapeAttrValue } from 'xss';

/**
 * Sanitise an HTML string
 *
 * Escapes <script> tags to prevent XSS attacks.
 *
 * @see {@link https://www.npmjs.com/package/xss}
 *
 * @param {string} html
 * @param {object} options
 *
 * @returns {ReactElement}
 */
export const sanitizeHtml = (html: string): string => {
  const options = {
    /* eslint-disable consistent-return */
    onIgnoreTagAttr: (tag: string, name: string, value: string) => {
      // allow aria-hidden attributes
      if (name === 'aria-hidden' || name === 'id') {
        // escape its value using built-in escapeAttrValue function
        return `${name}="${escapeAttrValue(value)}"`;
      }
      // no return as `onIgnoreTagAttr` expects returned type of string or void
    }
    /* eslint-enable consistent-return */
  };

  return xss(html, options);
};

export default sanitizeHtml;
