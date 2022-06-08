module.exports = {
  env: {
    browser: true,
    es2021: true,
    commonjs: true,
    node: true,
  },
  extends: ['eslint:recommended'],

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    indent: ['off', 'tab'],
    'no-unused-vars': ['off', { vars: 'local' }],
    'no-useless-catch': ['off'],
    'no-undef': ['off'],
  },
};
