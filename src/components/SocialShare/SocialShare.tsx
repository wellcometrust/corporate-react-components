import React, { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import htmlToText from 'html-to-text';

import Button from 'Button';
import Icon from 'Icon';
import VisuallyHidden from 'VisuallyHidden';

type SocialShareProps = {
  body: string;
  caption?: string;
  credit?: string;
  hasCopyLink?: boolean;
  title: string;
  url: string;
};

export const SocialShare = ({
  body,
  caption,
  credit,
  hasCopyLink = false,
  title,
  url
}: SocialShareProps) => {
  const [copied, setCopied] = useState(false);

  const bodyText = htmlToText.fromString(body, { wordwrap: false });

  /**
   * If the `credit` prop is passed, then we want to include that with the
   * the title when we share to channels that don't allow for long
   * body copy (e.g. Twitter).
   */
  const titleText = credit
    ? htmlToText.fromString(`${title} - Credit: ${credit}`, { wordwrap: false })
    : htmlToText.fromString(title, { wordwrap: false });

  const titleAndBodyText = `${titleText}%0d%0a%0d%0a${bodyText}`;

  const handleShareLink = () => {
    // TODO analytics event
    setCopied(true);
  };

  // TODO: introduce data array or map for dynamically generating social links
  return (
    <div className="cc-social-share">
      <ul className="cc-social-share__list">
        <li className="cc-social-share__item">
          <a
            href={`https://www.facebook.com/share.php?u=${url}&quote=${titleAndBodyText}&utm_source=facebookShare`}
            className="cc-social-share__link"
          >
            <VisuallyHidden>Share on Facebook</VisuallyHidden>
            <Icon name="facebook" className="cc-social-share__icon" />
          </a>
        </li>
        <li className="cc-social-share__item">
          <a
            href={`https://twitter.com/intent/tweet?text=${titleText}%20%40wellcometrust&url=${url}&utm_source=twitterShare`}
            className="cc-social-share__link"
          >
            <VisuallyHidden>Tweet</VisuallyHidden>
            <Icon name="twitter" className="cc-social-share__icon" />
          </a>
        </li>
        <li className="cc-social-share__item">
          <a
            href={`http://www.linkedin.com/shareArticle?mini=true&url=${url}&utm_source=linkedinShare`}
            className="cc-social-share__link"
          >
            <VisuallyHidden>Share on LinkedIn</VisuallyHidden>
            <Icon name="linkedin" className="cc-social-share__icon" />
          </a>
        </li>
        <li className="cc-social-share__item">
          <a
            href={`mailto:?subject=Shared%20from%20Wellcome%3A%20${titleText}&body=${bodyText}%0d%0a%0d%0a${url}&utm_source=emailShare %0A%0A---%0A%0ASign up to the Wellcome newsletter: https://wellcome.org/newsletters/subscribe-to-wellcome-newsletter-temp`}
            className="cc-social-share__link"
          >
            <VisuallyHidden>Email</VisuallyHidden>
            <Icon name="email" className="cc-social-share__icon" />
          </a>
        </li>
        {hasCopyLink && (
          <li className="cc-social-share__item">
            <CopyToClipboard text={url} onCopy={handleShareLink}>
              <Button className="cc-social-share__link" variant="unstyled">
                <VisuallyHidden>Share a link</VisuallyHidden>
                <Icon name="shareLink" className="cc-social-share__icon" />
              </Button>
            </CopyToClipboard>
            {copied && (
              <span className="cc-social-share__copied">URL copied</span>
            )}
          </li>
        )}
      </ul>
    </div>
  );
};

export default SocialShare;
