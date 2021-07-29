import React from 'react';

import NewsletterFormItem from './NewsletterFormItem';

export const NewsletterFormFooter = () => (
  <NewsletterFormItem type="footer">
    <p>By clicking subscribe, you agree to receive this newsletter.</p>
    <p>
      We use a third party provider, Dotdigital, to deliver our newsletters. For
      information about how we handle your data, please read our{' '}
      <a href="/about-us/governance/privacy-and-terms">privacy notice</a>. You
      can unsubscribe at any time using the links in the email you receive.
    </p>
  </NewsletterFormItem>
);

export default NewsletterFormFooter;
