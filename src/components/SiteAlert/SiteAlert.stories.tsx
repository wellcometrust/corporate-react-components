import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';

import SiteAlert from 'SiteAlert';

const SiteAlertExample = () => {
  const isActive = boolean('isActive', true);
  const urlString = text('url', 'https://wellcome.org/');
  const textString = text('text', 'Visit the Wellcome Trust website');
  const hasButton = boolean('Show close button?', false);
  const handleDismiss = () => {};

  return (
    <SiteAlert
      handleDismiss={hasButton && handleDismiss}
      isActive={isActive}
      text={textString}
      url={urlString}
    />
  );
};

const stories = storiesOf('Components/SiteAlert', module);

stories.add('SiteAlert', SiteAlertExample);
