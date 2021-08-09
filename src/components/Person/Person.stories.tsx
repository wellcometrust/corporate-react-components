import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs';

import Person from './Person';

const PersonExample = () => {
  const generalGroupID = 'General';
  const linksGroupID = 'Links';
  const imageGroupID = 'Image';

  const imageSrc = text(
    'Image path',
    `https://via.placeholder.com/300`,
    imageGroupID
  );
  const hasImage = boolean('Has image?', true, imageGroupID);

  const description = text(
    'Description',
    'Henry Wellcome became a wealthy and prominent figure in the growth of the modern pharmaceutical industry. After his death in 1936 (Silas Burroughs had died in 1895), the company became the property of the newly formed Wellcome Trust, which used the profits to fund charitable activities supporting research related to health.',
    generalGroupID
  );
  const jobTitle = text('Job title', 'Founder', generalGroupID);
  const name = text('Name', 'Henry Wellcome', generalGroupID);
  const organisation = text('Organisation', 'Wellcome Trust', generalGroupID);
  const layoutVariant = select(
    'Layout variant',
    ['author', 'compact', 'narrow', null],
    null,
    generalGroupID
  );

  const links = ['one', 'two', 'three'].map(el => {
    return {
      title: text(`Link ${el} text`, `Link ${el}`, linksGroupID),
      url: `/${el}`
    };
  });

  return (
    <Person
      description={layoutVariant !== 'compact' && description}
      imageSrc={hasImage && imageSrc}
      jobTitle={jobTitle}
      layoutVariant={layoutVariant}
      links={links}
      name={name}
      organisation={organisation}
    />
  );
};

const stories = storiesOf('Components/Person', module);

stories.add('Person', PersonExample);
