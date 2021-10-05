import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import Text from './Text';
import Readme from './Text.md';

const TextExample = () => {
  const textClassName = text('className', '');

  return (
    <Text className={textClassName}>
      {`
      <h3>Heading 3</h3>
      <p><a href="/">Internal link</a></p>
      <p><a target="_blank" href="mailto:email@wellcome.org">Email address link</a></p>
      <p><a href="https://wellcome.org" target="_blank">Absolute Wellcome link</a></p>
      <p><a href="https://www.wellcome.ac.uk" target="_blank">Absolute Wellcome.ac.uk link</a></p>
      <p><a href="http://test.com" target="_blank">External link</a></p>
      <p><a href="https://who.org" target="_blank">Another external link</a></p>
      <p><script>alert('xss')</script>Paragraph hiding a script tag</p>
      <p><span class="foo">Text in a span with a class of 'foo'</span> followed by normal text not in a span.</p>
      <script>alert('another xss')</script>
      <p><a href="javascript:alert(1)">Test JS URL</a></p>
      <table>
        <caption>Table caption</caption>
        <thead>
          <tr>
            <th scope="col">Heading 1</th>
            <th scope="col">Heading 2</th>
            <th scope="col">Heading 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
          <tr>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
          <tr>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
        </tbody>
      </table>
      `}
    </Text>
  );
};

const stories = storiesOf('Components/Text', module);

stories.add('Text', TextExample, {
  readme: { sidebar: Readme }
});
