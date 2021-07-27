import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs';

import Image from './Image';
import Readme from './Image.md';

const ImageExample = () => {
  const AltText = text('alt', 'Image alt text');
  const CaptionText = text('caption', 'Image caption');
  const CreditText = text('credit', 'Image credit');
  const captionVariant = select('caption variant', ['below', 'right'], 'right');
  const shouldHideCaption = boolean('should hide caption', false);

  return (
    <Image
      alt={AltText}
      captionText={CaptionText}
      captionVariant={captionVariant}
      credit={CreditText}
      shouldHideCaption={shouldHideCaption}
      src="https://placehold.it/768x432&text=default+image+(768w)"
      srcSet="https://placehold.it/400x225 400w, https://placehold.it/768x432 768w, https://placehold.it/1024x576 1024w"
    />
  );
};

const stories = storiesOf('Components/Image', module);

stories.add('Image', ImageExample, {
  readme: { sidebar: Readme }
});
