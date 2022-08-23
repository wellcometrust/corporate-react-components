import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';

import FormField from 'FormField';
// import FormFieldError from 'FormFieldError';
import Label from 'Label';

import TextInput from './TextInput';

const TextInputExample = () => {
  const isDisabled = boolean('isDisabled', false);
  const isInvalid = boolean('isInvalid', false);
  const isRequired = boolean('isRequired', false);

  return (
    <TextInput
      id="text-input"
      isDisabled={isDisabled}
      isInvalid={isInvalid}
      isRequired={isRequired}
      name="text-input"
      type="text"
    />
  );
};

const TextInputFormFieldExample = () => {
  const label = text('label', 'Input Label');
  const isDisabled = boolean('isDisabled', false);
  const isInvalid = boolean('isInvalid', false);
  const isRequired = boolean('isRequired', false);

  return (
    <FormField>
      <Label htmlFor="text-input" isDisabled={isDisabled} text={label} />
      <TextInput
        id="text-input"
        isDisabled={isDisabled}
        isInvalid={isInvalid}
        isRequired={isRequired}
        name="text-input"
        type="text"
      />
      {/* {isInvalid && ( */}
      {/*  <FormFieldError id="text-input-error" errors="This field is invalid" /> */}
      {/* )} */}
    </FormField>
  );
};

const stories = storiesOf('Components/TextInput', module);

stories.add('Simple', TextInputExample);
stories.add('Form Field (with label)', TextInputFormFieldExample);
