import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';

import NumberInput from 'NumberInput';
import Label from 'Label';
import FormField from 'FormField';
import FormFieldHint from 'FormFieldHint';
// import FormFieldError from 'FormFieldError';
import Readme from './NumberInput.md';

const NumberInputExample = () => {
  const error = text('Error text', 'Error');
  const hint = text('Hint text', 'Hint');
  const label = text('Label text', 'Label');
  const isDisabled = boolean('Is disabled?', false);
  const isRequired = boolean('Is required?', false);
  const hasError = boolean('Has error?', false);

  return (
    <FormField>
      <Label htmlFor="numberExample" isDisabled={isDisabled} text={label} />
      <NumberInput
        describedBy={
          hasError
            ? 'numberExampleError numberExampleHint'
            : 'numberExampleHint'
        }
        isDisabled={isDisabled}
        isInvalid={hasError}
        isRequired={isRequired}
        id="numberExample"
        name="numberExample"
      />
      <FormFieldHint id="numberExampleHint">
        <p>{hint}</p>
      </FormFieldHint>
      {/* {(hasError || isRequired) && ( */}
      {/*  <FormFieldError id="numberExampleError" errors={error} /> */}
      {/* )} */}
    </FormField>
  );
};

const stories = storiesOf('Components/NumberInput', module);

stories.add('NumberInput', NumberInputExample, {
  readme: { sidebar: Readme }
});
