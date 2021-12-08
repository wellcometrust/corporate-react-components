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
