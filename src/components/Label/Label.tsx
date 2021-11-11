import React from 'react';
import cx from 'classnames';

type LabelProps = {
  children?: React.ReactNode;
  className?: string;
  htmlFor: string;
  isDisabled?: boolean;
  text?: string;
};

export const FormLabel = ({
  children,
  className,
  htmlFor,
  isDisabled,
  text
}: LabelProps) => {
  const classNames = cx('cc-label', {
    'is-disabled': isDisabled,
    [className]: className
  });

  return (
    <label className={classNames} htmlFor={htmlFor}>
      {children || text}
    </label>
  );
};

export default FormLabel;
