import React from 'react';
import { mount } from 'enzyme';

import RichText from 'RichText';

describe('<RichText />', () => {
  const content = (
    <RichText>{'<h3 aria-hidden="true">Heading 3</h3>'}</RichText>
  );
  const outputMount = mount(content);

  it('contains an H3 element with aria-hidden attribute', () => {
    expect(outputMount.html()).toEqual(
      '<div class="cc-rich-text"><h3 aria-hidden="true">Heading 3</h3></div>'
    );
  });
});
