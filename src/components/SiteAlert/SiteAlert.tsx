import React, { useEffect, useState } from 'react';
import cx from 'classnames';

import Button from 'Button';
import Icon from 'Icon/Icon';
import VisuallyHidden from 'VisuallyHidden';
import { isExternalLink } from 'Link/Link';

type SiteAlertProps = {
  className?: string;
  handleDismiss?: () => void;
  isActive: boolean;
  text: string;
  url?: string;
};

export const SiteAlert = ({
  className,
  handleDismiss,
  isActive,
  text,
  url
}: SiteAlertProps) => {
  const classNames = cx('site-alert', {
    [className]: className,
    'is-active': isActive
  });

  const [isExternal, setExternal] = useState(false);

  // Ensures 'window' is present
  useEffect(() => {
    if (url) {
      setExternal(isExternalLink(url));
    }
  }, []);

  const tabIndex = isActive ? 0 : -1;

  return (
    <div className={classNames}>
      <div className="site-alert__container">
        {url ? (
          <a
            className="site-alert__link no-external-marker"
            href={url}
            rel={isExternal ? 'noopener noreferrer' : null}
            target={isExternal ? '_blank' : null}
            tabIndex={tabIndex}
          >
            <span className="site-alert__link-text">{text}</span>
            {isExternal && (
              <VisuallyHidden>(opens in a new tab)</VisuallyHidden>
            )}
            <Icon name="arrow" className="btn__icon btn__icon--right" />
          </a>
        ) : (
          <p className="site-alert__text">{text}</p>
        )}
        {typeof handleDismiss === 'function' && (
          <button
            className="site-alert__btn-close"
            onClick={handleDismiss}
            type="button"
            tabIndex={tabIndex}
          >
            Close <VisuallyHidden>{`${text} banner`}</VisuallyHidden>
            <Icon name="closeBold" />
          </button>
        )}
      </div>
    </div>
  );
};

export default SiteAlert;
