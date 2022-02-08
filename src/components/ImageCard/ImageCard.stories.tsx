import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';

import Listing from 'Listing';

import ImageCard from './ImageCard';

const SingleImageCard = () => {
  const authors = text(
    'authors',
    'Christiane Hertz-Fowler, Georgia Walton, Chonnettia Jones'
  );

  const date = text('Date', '03/08/1991');
  const readTime = text('Read time', '6 minutes');

  const href = text('href', '/news/all');

  const imageAlt = text('Image alt text', 'Alternative image text');
  const imageSrc = text('Image path', `https://via.placeholder.com/300`);

  const metaLabel = text('Meta Label', 'Climate Change');

  const title = text('Title', 'My section');
  const titleAs = select('Title element', ['h2', 'h3', 'h4', 'h5', 'h6'], 'h3');

  return (
    <ImageCard
      authors={
        authors.trim().length
          ? authors
              .trim()
              .split(',')
              .map(a => a.trim())
          : []
      }
      date={date}
      href={href}
      imageAlt={imageAlt}
      imageSrc={imageSrc}
      metaLabel={metaLabel}
      readTime={readTime}
      title={title}
      titleAs={titleAs}
    />
  );
};

const MultipleImageCard = () => {
  const cardCount = select('How many ImageCards?', [2, 3], 3, 'General');

  const knobs = [...Array(cardCount).keys()].map(i => ({
    authors: text(
      'authors',
      'Christiane Hertz-Fowler, Georgia Walton, Chonnettia Jones',
      `Card ${i + 1}`
    ),
    date: text('Date', '03/08/1991', `Card ${i + 1}`),
    href: text('href', '/news/all', `Card ${i + 1}`),
    imageAlt: text('Image alt text', 'Alternative image text', `Card ${i + 1}`),
    imageSrc: text(
      'Image path',
      `https://via.placeholder.com/300`,
      `Card ${i + 1}`
    ),
    metaLabel: text('Meta Label', 'Climate Change', `Card ${i + 1}`),
    readTime: text('Read time', '6 minutes', `Card ${i + 1}`),
    title: text('Title', 'My section', `Card ${i + 1}`),
    titleAs: select(
      'Title element',
      ['h2', 'h3', 'h4', 'h5', 'h6'],
      'h3',
      `Card ${i + 1}`
    )
  }));

  return (
    <Listing variant="image_card">
      {[...Array(cardCount).keys()].map(i => (
        <ImageCard
          authors={knobs[i].authors
            .trim()
            .split(',')
            .map(a => a.trim())}
          date={knobs[i].date}
          imageAlt={knobs[i].imageAlt}
          imageSrc={knobs[i].imageSrc}
          title={knobs[i].title}
          titleAs={knobs[i].titleAs}
          metaLabel={knobs[i].metaLabel}
          href={knobs[i].href}
          readTime={knobs[i].readTime}
        />
      ))}
    </Listing>
  );
};

const stories = storiesOf('Components/ImageCard', module);

stories.add('Single', SingleImageCard);
stories.add('Multiple', MultipleImageCard);
