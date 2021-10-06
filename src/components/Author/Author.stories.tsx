import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs';

import Author from './Author';

const AuthorExample = () => {
  const generalGroupID = 'General';
  const linksGroupID = 'Links';
  const imageGroupID = 'Image';

  const imageSrc = text(
    'Image path',
    `https://via.placeholder.com/300`,
    imageGroupID
  );
  const hasImage = boolean('Has image?', true, imageGroupID);
  const jobTitle = text('Job title', 'Founder', generalGroupID);
  const name = text('Name', 'Henry Wellcome', generalGroupID);
  const organisation = text('Organisation', 'Wellcome Trust', generalGroupID);

  const links = ['one', 'two', 'three'].map(el => {
    return {
      title: text(`Link ${el} text`, `Link ${el}`, linksGroupID),
      url: `/${el}`
    };
  });

  const layoutVariant = select(
    'Layout variant',
    ['horizontal', null],
    null,
    generalGroupID
  );

  return (
    <Author
      imageSrc={hasImage && imageSrc}
      layoutVariant={layoutVariant}
      jobTitle={jobTitle}
      links={links}
      name={name}
      organisation={organisation}
    />
  );
};

const stories = storiesOf('Components/Author', module);

stories.add('Author', AuthorExample);
