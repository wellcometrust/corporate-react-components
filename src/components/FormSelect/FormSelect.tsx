import React, { forwardRef } from 'react';
import cx from 'classnames';

type FormSelectOptionProps = {
  label: string;
  value: string;
};

type FormSelectProps = {
  className?: string;
  defaultText?: string;
  id: string;
  isRequired?: boolean;
  name: string;
  options: (string | FormSelectOptionProps)[];
};

export const FormSelect = forwardRef(
  (
    {
      className,
      defaultText = 'Please select',
      id,
      isRequired,
      name,
      options
    }: FormSelectProps,
    ref: React.Ref<HTMLSelectElement>
  ) => {
    const classNames = cx('cc-select', {
      [className]: className
    });

    return (
      <select
        className={classNames}
        defaultValue=""
        id={id}
        name={name}
        ref={ref}
        required={isRequired}
      >
        <option disabled value="">
          {defaultText}
        </option>
        {options.map(option => {
          if (typeof option === 'object') {
            return (
              <option key={`option-${option.label}`} value={option.value}>
                {option.label}
              </option>
            );
          }
          return <option key={`option-${option}`}>{option}</option>;
        })}
      </select>
    );
  }
);

export default FormSelect;
