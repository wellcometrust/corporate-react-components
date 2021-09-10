import React, {
  forwardRef,
  MouseEvent as ReactMouseEvent,
  MouseEventHandler,
  Ref
} from 'react';
import cx from 'classnames';

import Icon from 'Icon/Icon';
import Link from 'Link';

type ButtonProps = {
  autoFocus?: boolean;
  className?: string;
  children: React.ReactNode;
  href?: string | null;
  icon?: string;
  iconClassName?: string;
  iconPlacementSwitch?: boolean;
  id?: string;
  isDisabled?: boolean;
  onClick?: MouseEventHandler;
  role?: string;
  tabIndex?: number;
  textClassName?: string;
  type?: string;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'link' | 'unstyled';
};

export const Button = forwardRef(
  (
    {
      autoFocus = false,
      children,
      className,
      href,
      icon,
      iconClassName,
      iconPlacementSwitch,
      id,
      isDisabled,
      onClick,
      role,
      tabIndex,
      textClassName,
      type = 'button',
      variant = 'primary',
      ...props
    }: ButtonProps,
    ref: Ref<HTMLButtonElement>
  ) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const Element: any = href ? Link : 'button';
    const isUnstyled = variant !== 'unstyled';
    const classNames = cx({
      btn: isUnstyled,
      [`btn--${variant}`]: isUnstyled,
      [`${className}`]: className
    });
    const iconClassNames = cx('btn__icon', {
      'btn__icon--left': !iconPlacementSwitch,
      'btn__icon--right': iconPlacementSwitch,
      [iconClassName]: iconClassName
    });
    const textClassNames = cx('btn__text', {
      [textClassName]: textClassName
    });

    return (
      <Element
        autoFocus={autoFocus}
        className={classNames}
        disabled={isDisabled}
        to={href}
        id={id}
        onClick={(e: ReactMouseEvent) => {
          if (typeof onClick === 'function' && !isDisabled) {
            onClick(e);
          }
        }}
        ref={ref}
        role={role}
        tabIndex={tabIndex}
        type={!href ? type : null}
        {...props}
      >
        {icon && !iconPlacementSwitch && (
          <Icon name={icon} className={iconClassNames} />
        )}
        <span className={textClassNames}>{children}</span>
        {icon && iconPlacementSwitch && (
          <Icon name={icon} className={iconClassNames} />
        )}
      </Element>
    );
  }
);

Button.displayName = 'Button';

export default Button;
