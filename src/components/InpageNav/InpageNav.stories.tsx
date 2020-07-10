import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';

import InpageNav from './InpageNav';
import Readme from './InpageNav.md';

const links = [
  {
    title: 'Section title 1',
    id: '#section-title-1'
  },
  {
    title: 'Section title 2',
    id: '#section-title-2'
  },
  {
    title: 'Very very very very very very very very long Section title 3',
    id: '#section-title-3'
  },
  {
    title: 'Section title 4',
    id: '#section-title-4'
  }
];

const InpageNavExample = () => {
  const isMinimal = boolean('isMinimal', false);

  return <InpageNav isMinimal={isMinimal} links={links} />;
};

const stories = storiesOf('Components|Page header', module);

stories.add('InpageNav', InpageNavExample, {
  readme: { sidebar: Readme }
});
