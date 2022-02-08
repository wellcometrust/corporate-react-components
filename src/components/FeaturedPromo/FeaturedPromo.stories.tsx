import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';

import FeaturedPromo from './FeaturedPromo';

const FeaturedPromoExample = () => {
  const authors = text('authors', 'Author One, Author Two');

  const imageAlt = text('Image alt text', 'Alternative image text');
  const imageSrc = text('Image path', `https://via.placeholder.com/300`);

  const title = text('Title', 'My section');
  const titleAs = select('Title element', ['h2', 'h3', 'h4', 'h5', 'h6'], 'h3');

  const description = text(
    'Description',
    `Nulla non Lorem in fugiat dolore aliquip ad irure reprehenderit reprehenderit proident.`
  );

  const metaLabel = text('metaLabel', 'Climate Change');

  const href = text('href', '/news/all');

  const date = text('Date', '02/08/2022');
  const readTime = text('Read time', '6 minutes');

  return (
    <FeaturedPromo
      authors={
        authors.trim().length
          ? authors
              .trim()
              .split(',')
              .map(a => a.trim())
          : []
      }
      date={date}
      description={description}
      href={href}
      imageAlt={imageAlt}
      imageSrc={`${imageSrc}?text=${imageAlt}`}
      metaLabel={metaLabel}
      readTime={readTime}
      title={title}
      titleAs={titleAs}
    />
  );
};

const stories = storiesOf('Components/FeaturedPromo', module);

stories.add('FeaturedPromo', FeaturedPromoExample);
