module.exports = {
  extends: ['google'],
  quotes: [2, 'single'],
  globals: {
    SwaggerEditor: false,
  },
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    'linebreak-style': 0,
  },
};
