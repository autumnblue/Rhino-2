module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "plugins": ["babel"],
  "rules": {
    // we don't import React directly
    "react/react-in-jsx-scope": 0,
    // .js extension is easier to manage
    "react/jsx-filename-extension": [1, { "extensions": [".js"] }],
    // allow to use while(true) in sagas
    "no-constant-condition": 0,
    // allow to use for..of
    "no-restricted-syntax": 0,

    // allow to use package-like dependency "client"
    "import/extensions": 0,
    "import/no-extraneous-dependencies": 0,
    "import/no-unresolved": 0,

    // we can export and import both default and named
    "import/prefer-default-export": 0,

    // we don/t use default props
    "react/require-default-props": 0,

    // identifiers like foo_bar are used as server request params
    "camelcase": 0
  },
  globals: {
    __CLIENT__: true,
    __DEVELOPMENT__: true,
    __DEVTOOLS__: true,
    window: true,
    Base: true
  }
};
