module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    parser: 'babel-eslint',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'airbnb',
    'plugin:react-hooks/recommended',
  ],
  plugins: [
    'react',
    'vue',
  ],
  rules: {
    'comma-dangle': 0,
    'import/no-extraneous-dependencies': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'no-console': 0,
    'no-param-reassign': ['error', { props: false }],
    'import/no-unresolved': [
      2, {
        ignore: ['.syntax$'],
      },
    ],
    /* 'import/extensions': [
      0,
      'ignorePackages',
      {
        vue: 'always',
        syntax: 'ignorePackages',
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ], */
    'react/button-has-type': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/no-access-state-in-setstate': 0,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 'off',
    'react/state-in-constructor': 0,
    'vue/max-attributes-per-line': 0,
    'vue/singleline-html-element-content-newline': 0,
  },
};
