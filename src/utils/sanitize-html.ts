// polyfill and type definitions for String.prototype.replaceAll()
import 'ts-replace-all';

import xss from 'xss';

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
export const sanitizeHtml = (html: string): string => xss(html);

export default sanitizeHtml;
