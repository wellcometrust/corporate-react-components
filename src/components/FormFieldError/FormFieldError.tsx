import React from 'react';
import cx from 'classnames';

import Icon from 'Icon';
import VisuallyHidden from 'VisuallyHidden';

type FormFieldErrorProps = {
  className?: string;
  errors: string | {};
  id: string;
};

/**
 * Renders a list or paragraph of error messages
 *
 * @param {string} className
 * @param {string|object} errors
 * @param {string} id
 */
export const FormFieldError = ({
  className,
  errors,
  id
}: FormFieldErrorProps) => {
  const classNames = cx('cc-form-field-error', {
    [className]: className
  });

  return (
    <div className={classNames}>
      <Icon className="cc-form-field-error__icon" name="exclamationMark" />
      {typeof errors === 'string' && (
        <span className="cc-form-field-error__text" id={id}>
          <VisuallyHidden>Error: </VisuallyHidden>
          {errors}
        </span>
      )}
      {typeof errors === 'object' && Object.entries(errors).length === 1 && (
        <span className="cc-form-field-error__text" id={id}>
          <VisuallyHidden>Error: </VisuallyHidden>
          {Object.values(errors)[0]}
        </span>
      )}
      {typeof errors === 'object' && Object.entries(errors).length > 1 && (
        <ul className="cc-form-field-error__list" id={id}>
          {Object.entries(errors).map(([type, message]) => (
            <li
              key={`${id}-error-text-${type}`}
              className="cc-form-field-error__list-item"
            >
              <VisuallyHidden>Error: </VisuallyHidden>
              {message}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FormFieldError;
