import React from 'react';
import cx from 'classnames';

import SearchFormLabel from './SearchFormLabel';
import SearchFormInput from './SearchFormInput';
import SearchFormSubmitButton from './SearchFormSubmitButton';

type SearchFormProps = {
  action?: string;
  children?: React.ReactNode;
  className?: string;
  handleInputChange?: (event: React.FormEvent<HTMLInputElement>) => void;
  handleSubmit?: (
    event: React.FormEvent<HTMLFormElement>
  ) => Record<string, unknown>;
  hideLabelText?: boolean;
  inputClassName?: string;
  inputId: string;
  labelClassName?: string;
  labelTextClassName?: string;
  method?: 'GET' | 'POST';
  inputValue?: string;
  submitButtonClassName?: string;
  submitButtonHasStyle?: boolean;
};

export const SearchForm = ({
  action = '/search',
  children,
  className,
  handleInputChange,
  handleSubmit,
  hideLabelText = true,
  inputClassName,
  inputId,
  inputValue,
  labelClassName,
  labelTextClassName,
  method = 'GET',
  submitButtonClassName,
  submitButtonHasStyle = false
}: SearchFormProps) => {
  const classNames = cx({
    'search-form': !className,
    [`${className}`]: className
  });

  // Gather props for Label component
  const labelProps = {
    className: labelClassName,
    hideText: hideLabelText,
    htmlFor: inputId,
    textClassName: labelTextClassName
  };

  // Gather props for Input component
  const inputProps = {
    className: inputClassName,
    handleChange: handleInputChange,
    id: inputId,
    value: inputValue
  };

  // Gather props for SubmitButton component
  const submitButtonProps = {
    className: submitButtonClassName,
    styled: submitButtonHasStyle
  };

  return (
    <form
      className={classNames}
      role="search"
      action={action}
      method={method}
      onSubmit={handleSubmit}
    >
      <SearchFormLabel {...labelProps} />
      <SearchFormInput {...inputProps} />
      <SearchFormSubmitButton {...submitButtonProps} />
    </form>
  );
};

export default SearchForm;
