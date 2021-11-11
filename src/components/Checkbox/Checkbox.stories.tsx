import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';

import Checkbox from 'Checkbox';
import FormField from 'FormField';
import FormFieldError from 'FormFieldError';
import Label from 'Label';

const CheckboxExample = () => {
  const generalGroupID = 'General';
  const labelsGroupId = 'Labels';

  const hasError = boolean('Has error?', false, generalGroupID);
  const isDisabled = boolean('Is disabled?', false, generalGroupID);

  const errorMessage = text(
    'Error message',
    'Please confirm that your current organisation has been notified.',
    generalGroupID
  );
  const label = text(
    'Label',
    'Current organisation has been notified',
    labelsGroupId
  );
  const checkboxLabel = text(
    'Checkbox label',
    'I confirm that I have discussed this transfer with the research office at my current organisation',
    labelsGroupId
  );

  return (
    <form noValidate>
      <FormField>
        <Label
          htmlFor="wasOrganisationNotified"
          isDisabled={isDisabled}
          text={label}
        />
        <Checkbox
          describedBy={hasError && 'wasOrganisationNotifiedErrors'}
          id="wasOrganisationNotified"
          isDisabled={isDisabled}
          isInvalid={hasError}
          isRequired
          label={checkboxLabel}
          name="wasOrganisationNotified"
        />
        {hasError && (
          <FormFieldError
            errors={errorMessage}
            id="wasOrganisationNotifiedErrors"
          />
        )}
      </FormField>
    </form>
  );
};

const stories = storiesOf('Components/Checkbox', module);

stories.add('Checkbox', CheckboxExample);
