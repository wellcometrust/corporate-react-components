const path = require('path');

module.exports = {
  stories: ['../../src/components/**/*.stories.@(jsx|tsx)'],
  addons: [
    '@storybook/addon-knobs',
    '@storybook/addon-actions',
    '@storybook/addon-a11y',
    '@storybook/addon-viewport',
    'storybook-readme'
  ],
  typescript: {
    reactDocgen: 'react-docgen-typescript'
  },
  webpackFinal: async (config) => {
    // Absolute paths
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve('./src/'),
      path.resolve('./src/components')
    ];

    // Ensure stories can import TypeScript files
    config.resolve.extensions.push('.ts');

    // SASS
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../../')
    });

    return config;
  },
};
