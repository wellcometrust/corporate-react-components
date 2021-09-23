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
    `<p>Nulla non Lorem in fugiat dolore aliquip ad irure reprehenderit reprehenderit proident.</p>`
  );

  const metaLabel = text('metaLabel', 'Climate Change');

  const href = text('href', '/news/all');

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
      description={description}
      href={href}
      imageAlt={imageAlt}
      imageSrc={`${imageSrc}?text=${imageAlt}`}
      metaLabel={metaLabel}
      title={title}
      titleAs={titleAs}
    />
  );
};

const stories = storiesOf('Components/FeaturedPromo', module);

stories.add('FeaturedPromo', FeaturedPromoExample);
