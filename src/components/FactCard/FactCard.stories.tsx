import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';

import Listing from 'Listing';
import FactCard from './FactCard';
import Readme from './FactCard.md';

const SingleFactCard = () => {
  const generalGroupID = 'General';

  const description = text(
    'description',
    'The true impact of the COVID-19 pandemic will be felt beyond its immediate effects. Jeremy Farrar explains why the choices leaders make now will help define the 21st century.',
    generalGroupID
  );
  const href = text(
    'href',
    '/news/our-response-covid-19-will-help-define-21st-century',
    generalGroupID
  );
  const title = text(
    'title',
    'Our response to COVID-19 will help define the 21st century',
    generalGroupID
  );
  const linkText = text('linkText', 'Optional text link', generalGroupID);

  return (
    <FactCard
      description={description}
      href={href}
      title={title}
      linkText={linkText}
    />
  );
};

const MultipleFactCard = () => {
  const cardCount = select('How many ImageCards?', [2, 3], 3, 'General');

  const knobs = [...Array(cardCount).keys()].map(i => ({
    href: text(
      'href',
      '/news/our-response-covid-19-will-help-define-21st-century',
      `Card ${i + 1}`
    ),
    title: text(
      'Title',
      'Our response to COVID-19 will help define the 21st century',
      `Card ${i + 1}`
    ),
    titleAs: select(
      'Title element',
      ['h2', 'h3', 'h4', 'h5', 'h6'],
      'h3',
      `Card ${i + 1}`
    ),
    description: text(
      'description',
      'The true impact of the COVID-19 pandemic will be felt beyond its immediate effects. Jeremy Farrar explains why the choices leaders make now will help define the 21st century.',
      `Card ${i + 1}`
    ),
    linkText: text('linkText', 'Optional text link', `Card ${i + 1}`)
  }));

  return (
    <Listing variant="fact_card">
      {[...Array(cardCount).keys()].map(i => (
        <FactCard
          title={knobs[i].title}
          titleAs={knobs[i].titleAs}
          linkText={knobs[i].linkText}
          href={knobs[i].href}
          description={knobs[i].description}
        />
      ))}
    </Listing>
  );
};

const stories = storiesOf('Components/FactCard', module);

stories.add('SingleFactCard', SingleFactCard, {
  readme: { sidebar: Readme }
});
stories.add('MultipleFactCard', MultipleFactCard, {
  readme: { sidebar: Readme }
});
