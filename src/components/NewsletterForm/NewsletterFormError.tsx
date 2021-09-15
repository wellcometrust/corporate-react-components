import React from 'react';

import NewsletterFormItem from './NewsletterFormItem';

export const NewsletterFormError = () => (
  <NewsletterFormItem type="error">
    <div
      className="newsletter-form__response-msg newsletter-form__response-msg--error"
      role="status"
    >
      <p className="newsletter-form__response-msg-text">
        There was a problem with your submission, please try again.
      </p>
    </div>
  </NewsletterFormItem>
);

export default NewsletterFormError;
