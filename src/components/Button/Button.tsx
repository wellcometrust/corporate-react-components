import React from 'react';
import cx from 'classnames';

import Icon from 'Icon/Icon';

type ButtonProps = {
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
  href?: string | null;
  icon?: string;
  iconPlacementSwitch?: boolean;
  tabIndex?: string;
  type?: string;
};

export const Button = ({
  children,
  className,
  disabled,
  href,
  icon,
  iconPlacementSwitch,
  tabIndex,
  type
}: ButtonProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Element: any = href ? 'a' : 'button';
  const classNames = cx('btn', { [`${className}`]: className });

  return (
    <Element
      className={classNames}
      disabled={disabled}
      href={href}
      tabIndex={tabIndex}
      type={!href ? type : null}
    >
      {icon && !iconPlacementSwitch && (
        <Icon name={icon} className="btn__icon btn__icon--left" />
      )}
      <span className="btn__text">{children}</span>
      {icon && iconPlacementSwitch && (
        <Icon name={icon} className="btn__icon btn__icon--right" />
      )}
    </Element>
  );
};

export default Button;
