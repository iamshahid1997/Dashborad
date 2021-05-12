module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  plugins: [
    'react-hooks',
  ],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/state-in-constructor': 'off',
    'import/prefer-default-export': 'off',
    'react/prefer-stateless-function': 'off',
    'max-classes-per-file': 'off',
    'no-underscore-dangle': 'off',
    'no-use-before-define': 0,
    'linebreak-style': 'off',
    'react/jsx-equals-spacing': [1, 'always'],
    'react/no-multi-comp': 'off',
    'max-len': ['error', { code: 110 }],
    camelcase: ['warn'],
    'react/destructuring-assignment': ['warn'],
    'object-curly-newline': [0],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'prefer-destructuring': ['warn'],
    'react/jsx-one-expression-per-line': [0],
    'react/sort-comp': [1, {
      order: [
        'static-methods',
        'lifecycle',
        'everything-else',
        'rendering',
      ],
      groups: {
        rendering: [
          '/^render.+$/',
          'render',
        ],
      },
    }],
    'sort-imports': ['error', {
      ignoreCase: false,
      ignoreDeclarationSort: true,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
    }],
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never',
      jsx: 'never',
    }],
  },
  env: {
    browser: true,
    node: true,
  },
};
