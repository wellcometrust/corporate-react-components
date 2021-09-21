/**
 * @file HTML Parser utility.
 */

// polyfill and type definitions for String.prototype.replaceAll()
import 'ts-replace-all';

// other libraries which have been tried and found wanting

// import ReactHtmlParser, { Options } from 'react-html-parser';
// import parser from 'html-react-parser';
// import sanitizeHtml from 'sanitize-html';
// import htmlparser2 from 'htmlparser2';
// import parser from 'parse-entities';

// no server-side, otherwise really good
// import DOMPurify from 'dompurify';

// built on top of DOMPurify but presents dependency issues on import
// import DOMPurify from 'isomorphic-dompurify';

// very similar to DOMPurify, really wide usage
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
// Should ideally be called sanitize (or GB spelling), sanitiseHTML or similar
export const parseHtml = (html: string): string => xss(html);

export default parseHtml;
