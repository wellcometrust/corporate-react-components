module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    node: true,
    es2020: true,
    jest: true
  },
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/warnings',
    'plugin:promise/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: [
    'prettier',
    'import',
    'promise',
  ],
  globals: {
    document: true,
    window: true,
    process: true
  },
  rules: {
    'camelcase': ['warn', { properties: 'never' }],
    'react/destructuring-assignment': 0,
    'react/require-default-props': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-filename-extension': 0,
    'react/no-unused-prop-types': 0,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-props-no-spreading': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'import/no-extraneous-dependencies': ['error', {'devDependencies': true}],
    'prettier/prettier': 'error',
    'jsx-a11y/label-has-associated-control': [ 2, {
      labelComponents: ['SearchLabel'],
      controlComponents: ['SearchInput'],
      depth: 3,
    }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
      },
    ],
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-var-requires': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        mjs: 'never',
      },
    ]
  },
  'settings': {
    'import/resolver': {
      'node': {
        'extensions': ['.js', '.jsx', '.ts', '.tsx'],
        'moduleDirectory': ['node_modules', './src', './src/components']
      }
    }
  },
}
