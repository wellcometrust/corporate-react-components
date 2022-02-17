import React from 'react';
import { render, shallow } from 'enzyme';

import RichText from 'RichText';
import Text from './Text';

const content = `
<h3>Heading 3</h3>
<p><a href="/">Internal link</a></p>
<p><a target="_blank" href="mailto:email@wellcome.org">Email address link</a></p>
<p><a href="https://wellcome.org" target="_blank">Absolute Wellcome link</a></p>
<p><a href="https://www.wellcome.ac.uk" target="_blank">Absolute Wellcome.ac.uk link</a></p>
<p><a href="http://test.com" target="_blank">External link</a></p>
<p><a href="https://who.org" target="_blank">Another external link</a></p>
<p><a id="anchor-link">Same page anchor target</a></p>
<p><script>alert('xss')</script>Paragraph hiding a script tag</p>
<p><a href="javascript:alert('xss')">Link with a JavaScript href</a></p>
<script>alert('another xss')</script>
`;
describe('<Text />', () => {
  const outputShallow = shallow(
    <Text className="shallow-text">{content}</Text>
  );
  const outputRender = render(<Text className="rendered-text">{content}</Text>);

  it('contains a RichText child component', () => {
    expect(outputShallow.find(RichText)).toHaveLength(1);
  });

  it('contains an H3 element', () => {
    expect(outputRender.find('h3')).toHaveLength(1);
  });

  it('has script elements stripped out', () => {
    expect(outputRender.find('script')).toHaveLength(0);
  });

  it('has 8 link elements but no javascript contained in the href', () => {
    expect(outputRender.find('a')).toHaveLength(8);
    expect(outputRender.find('a[href]')).toHaveLength(7);
    expect(outputRender.find('[href]')).not.toContain('javascript');
  });

  it('has 1 in page link target element with an id', () => {
    expect(outputRender.find('a[id]')).toHaveLength(1);
  });
});
