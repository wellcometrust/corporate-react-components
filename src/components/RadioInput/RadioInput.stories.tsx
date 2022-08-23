import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';

import FormFieldset from 'FormFieldset';
// import FormFieldError from 'FormFieldError';
import RadioInput from 'RadioInput';

const RadioInputExample = () => {
  const generalGroupID = 'General';
  const labelsGroupId = 'Labels';

  const hasError = boolean('Has error?', false, generalGroupID);
  const isDisabled = boolean('Is disabled?', false, generalGroupID);

  const errorMessage = text(
    'Error message',
    'Select yes if this is the person who took leave',
    generalGroupID
  );
  const radioGroupLegend = text(
    'Group label',
    'Is this the person who took leave?',
    labelsGroupId
  );
  const firstRadioLabel = text('First radio label', 'Yes', labelsGroupId);
  const secondRadioLabel = text('Second radio label', 'No', labelsGroupId);

  return (
    <form noValidate>
      <FormFieldset legend={radioGroupLegend}>
        <RadioInput
          describedBy={hasError && 'isPersonWhoTookLeaveErrors'}
          id="isPersonWhoTookLeaveYes"
          isDisabled={isDisabled}
          label={firstRadioLabel}
          name="isPersonWhoTookLeave"
          value="yes"
        />
        <RadioInput
          describedBy={hasError && 'isPersonWhoTookLeaveErrors'}
          id="isPersonWhoTookLeaveNo"
          isDisabled={isDisabled}
          label={secondRadioLabel}
          name="isPersonWhoTookLeave"
          value="no"
        />
        {/* {hasError && ( */}
        {/*  <FormFieldError */}
        {/*    errors={errorMessage} */}
        {/*    id="isPersonWhoTookLeaveErrors" */}
        {/*  /> */}
        {/* )} */}
      </FormFieldset>
    </form>
  );
};

const stories = storiesOf('Components/RadioInput', module);

stories.add('RadioInput', RadioInputExample);
