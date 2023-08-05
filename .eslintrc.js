module.exports = {
  root: true,
  extends: '@react-native',
  rules: {

    semi: 'off',

    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    "useTabs": false
  },
};