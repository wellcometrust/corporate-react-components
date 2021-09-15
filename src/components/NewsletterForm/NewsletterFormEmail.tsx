import React from 'react';
import cx from 'classnames';

import VisuallyHidden from 'VisuallyHidden';
import NewsletterFormItem from './NewsletterFormItem';

type NewsletterFormEmailProps = {
  handleBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  handleChange?: (event: React.FormEvent<HTMLInputElement>) => void;
  hasError?: boolean | null;
  id: string;
  value?: string;
};

export const NewsletterFormEmail = ({
  handleBlur,
  handleChange,
  hasError,
  id,
  value
}: NewsletterFormEmailProps) => {
  const classNames = cx('newsletter-form__input', {
    'newsletter-form__input--invalid': hasError
  });

  return (
    <NewsletterFormItem hasError={hasError} type="email">
      <label
        className="newsletter-form__item-label newsletter-form__item-label--email"
        htmlFor={id}
      >
        Your email address
      </label>
      <input
        aria-describedby={hasError && `${id}-error`}
        autoComplete="email"
        className={classNames}
        id={id}
        name="email"
        onBlur={handleBlur}
        onChange={handleChange}
        required
        spellCheck="false"
        type="email"
        value={value}
      />
      {hasError && (
        <div className="newsletter-form__item-error">
          <span className="newsletter-form__item-error-text" id={`${id}-error`}>
            <VisuallyHidden>
              Error on the &quot;Your email address&quot; field.
            </VisuallyHidden>
            Please provide a valid email address.
          </span>
        </div>
      )}
    </NewsletterFormItem>
  );
};

export default NewsletterFormEmail;
