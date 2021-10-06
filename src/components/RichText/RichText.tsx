import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import cx from 'classnames';

import { ExternalLinkMarker } from 'Link';

import { sanitizeHtml } from 'utils/sanitize-html';

type RichTextProps = {
  children: string;
  className?: string;
  itemProp?: string;
  variant?: 'text' | 'text-snippet';
};

/**
 * Find all anchor elements with target="_blank"
 *
 * Regex groups
 * (?!.*class="non")               Negative lookahead to filter out any matches which contain this class
 * (?!.*href="https?:\/\/(www\.)?wellcome.(org|ac\.uk).*".*)
 *                                 Negative lookahead to filter out absolute links to the Wellcome site
 *     (?:www\.)?                  Non-capturing group matches the optional www prefix
 *     (?:org|ac\.uk)              Non-capturing group matches the possible domain endings
 * (?!.*href="mailto:)             Negative lookahead to filter out email links
 * (<a[^>]*target="_blank"[^>]*>)  Opening anchor tag which has a target="_blank" attribute
 * ([^<]+)                         The anchor content (any character which is not a left angle bracket)
 * (<\/a>)                         Closing anchor tag
 */
// TODO: replace `non` with class name to be ignored
const regexAnchorExternal = /(?!.*class="non")(?!.*href="https?:\/\/(?:www\.)?wellcome.(?:org|ac\.uk).*".*)(?!.*href="mailto:)(<a[^>]*target="_blank"[^>]*>)([^<]+)(<\/a>)/g;

const regexTableElements = /<table(.*?)>(.|\n)(.*?)(.|\n)*<\/table>/g;

/**
 * Perform some desirable transforms to a string of HTML so that we
 * can affect the markup however we desire.
 *
 * @param {string} children
 * @returns {string}
 */
const formatHTMLString = (children: string) => {
  try {
    // renderToStaticMarkup used to preserve svg attributes in JSX format for re-rendering
    const externalMarker = renderToStaticMarkup(<ExternalLinkMarker />);

    return (
      children
        /**
         * Add markup to all anchor elements which open in a new window
         * to indicate an external link
         */
        .replaceAll(regexAnchorExternal, (match, p1, p2, p3) =>
          // replace existing anchor string with embellished version containing assistive text
          // p[n] refers to each group within the match - groups are defined within parentheses
          // p1 and p2 are contained in the 2nd negative lookup
          // so we start with p3 as the first actual string
          p1
            ? `${p1.substring(
                0,
                p1.length - 1
              )} rel="nofollow noreferrer" class="u-link-new-window">${p2}${externalMarker}${p3}`
            : match
        )

        /**
         * Add markup to wrap <table> elements with a <div> to prevent overflow-x
         * on the rich-text element, constraining the overflow-x to only the
         * <table> element itself.
         */
        .replaceAll(regexTableElements, match => {
          return `<div class="cc-rich-text__table-wrap">${match}</div>`;
        })
    );
  } catch {
    return children;
  }
};

export const RichText = ({
  children,
  className,
  itemProp,
  variant = 'text'
}: RichTextProps) => {
  // pass text through sanitizeHtml to sanitize it prior to applying transformations
  const htmlString = formatHTMLString(sanitizeHtml(children));
  const classNames = cx(`cc-rich-${variant}`, {
    [className]: className
  });

  return (
    <div
      className={classNames}
      dangerouslySetInnerHTML={{ __html: htmlString }}
      itemProp={itemProp}
    />
  );
};

export default RichText;
