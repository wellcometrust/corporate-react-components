import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs';

import Quote from './Quote';
import Readme from './Quote.md';

const QuoteExample = () => {
  const generalGroupID = 'General';
  const linksGroupID = 'Links';
  const imageGroupID = 'Image';

  const cite = text('Cite', 'Citation or quote source', generalGroupID);
  const quoteBody = text(
    'Text',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget fringilla massa. Quisque ut enim vehicula, volutpat dui et, gravida purus. In eget blandit libero.',
    generalGroupID
  );

  const hasAuthor = boolean('Has author?', true, generalGroupID);

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

  const author = hasAuthor && {
    imageSrc: hasImage && imageSrc,
    jobTitle,
    links,
    name,
    organisation
  };

  return <Quote cite={cite} text={quoteBody} author={author} />;
};

const stories = storiesOf('Components/Quote', module);

stories.add('Quote', QuoteExample, {
  readme: { sidebar: Readme }
});
