import { addDecorator, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';

import './styles/storybook-app.scss';

addDecorator(withKnobs);
addDecorator(withA11y);

addParameters({
  options: {
    theme: {
      brandTitle: 'Wellcome.org Components'
    },
    panelPosition: 'right',
    sortStoriesByKind: true,
    storySort: {
      order: ['Global', 'Components']
    }
  }
});
