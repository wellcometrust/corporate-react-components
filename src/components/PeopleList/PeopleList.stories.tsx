import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs';

import PeopleList from './PeopleList';

const PeopleListExample = () => {
  const generalGroupID = 'General';

  const peopleCount = select('How many People?', [4, 5], 4, generalGroupID);

  const variant = select(
    'Layout variant',
    ['grid', 'list'],
    'list',
    generalGroupID
  );

  const hasImage = (index: number) =>
    boolean(`Person ${index + 1}: has image?`, true, `Person ${index + 1}`);

  const knobs = [...Array(peopleCount).keys()].map(i => ({
    id: `person-${i + 1}`,
    imageSrc: `https://via.placeholder.com/300`,
    imageSrcSet: hasImage(i) && `https://via.placeholder.com/300 310w`,
    jobTitle: text('Job title', 'Founder', `Person ${i + 1}`),
    layoutVariant: 'compact' as const,
    links: ['one', 'two'].map(el => ({
      title: text(`Link ${el} text`, `Link ${el}`, `Person ${i + 1}`),
      url: `/${el}`
    })),
    name: text('Name', 'Henry Wellcome', `Person ${i + 1}`),
    organisation: text('Organisation', 'Wellcome Trust', `Person ${i + 1}`)
  }));

  return <PeopleList people={knobs} variant={variant} />;
};

const stories = storiesOf('Components/PeopleList', module);

stories.add('PeopleList', PeopleListExample);
