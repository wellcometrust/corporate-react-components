import React from 'react';
import cx from 'classnames';

type LabelProps = {
  className?: string;
  htmlFor: string;
  isDisabled?: boolean;
  text: string;
};

export const FormLabel = ({
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
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label
      dangerouslySetInnerHTML={{ __html: text }}
      className={classNames}
      htmlFor={htmlFor}
    />
  );
};

export default FormLabel;
