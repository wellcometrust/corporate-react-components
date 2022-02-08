import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import FullWidthPromo from './FullWidthPromo';

const FullWidthPromoExample = () => {
  const generalID = 'General';
  const imageID = 'Image';
  const metaID = 'Meta';

  const description = text(
    'description',
    'Promo description long string of text lorem ispum dolor amet sit lorem ipsum dolor amet sit lorem lorem ispum dolor amet sit lorem ispum dolor amet sit lorem ispum dolor amet sit.',
    generalID
  );
  const href = text('href', '/', generalID);
  const linkText = text('linkText', 'Call to action link', generalID);
  const title = text(
    'title',
    'Full-width promo title long string of text lorem ispum dolor amet sit lorem ipsum dolor amet sit lorem.',
    generalID
  );

  const imageSrc = text('imgSrc', 'https://placehold.it/1600x1200', imageID);

  const authors = text('authors', 'Author One, Author Two', metaID);
  const metaLabel = text('metaLabel', 'Meta', metaID);
  const readTime = text('readTime', '6 minutes', metaID);
  const tags = [
    {
      href: text(
        'tag 1 href',
        '/what-we-do/our-work/coronavirus-covid-19',
        metaID
      ),
      id: '1',
      title: text('tag 1 title', 'Coronavirus (COVID-19)', metaID)
    },
    {
      href: text('tag 2 href', '/what-we-do/our-work/snakebites', metaID),
      id: '2',
      title: text('tag 2 title', 'Drug resistant infections', metaID)
    }
  ];

  return (
    <FullWidthPromo
      authors={
        authors.trim().length
          ? authors
              .trim()
              .split(',')
              .map(a => a.trim())
          : []
      }
      description={description}
      href={href}
      imageSrc={imageSrc}
      linkText={linkText}
      metaLabel={metaLabel}
      readTime={readTime}
      title={title}
      topics={tags}
    />
  );
};

const stories = storiesOf('Components/FullWidthPromo', module);

stories.add('FullWidthPromo', FullWidthPromoExample);
