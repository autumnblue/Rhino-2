module.exports = {
  "extends": "airbnb",
  "plugins": [
    "babel",
    "react",
    "jsx-a11y",
    "import",
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
    }
  },
  "rules": {
    "no-console": 0,
    "no-unused-expressions": 0,
    "no-unused-vars": 0,
    "react/prefer-stateless-function": 0,
    "no-nested-ternary": 0,
    "no-undef": 1,
    "global-require": 1,
    "new-cap": 1,
    "arrow-parens": 0,
    "babel/arrow-parens": 1,
    "max-len": 0,
  },
  globals: {
    __CLIENT__: true,
    __DEVELOPMENT__: true,
    __DEVTOOLS__: true,
  }
};
