module.exports = {
  extends      : "eslint:recommended",
  env          : {
    browser : true,
    amd     : true,
    commonjs: true,
    es6     : true
  },
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx                         : true
    },
    sourceType  : "module"
  },
  plugins      : [
    "react"
  ],
  rules        : {
    "indent": [
      "error",
      2,
      {"SwitchCase": 1}
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes"         : [
      "error",
      "single"
    ],
    "semi"           : [
      "error",
      "always"
    ],
    "no-unused-vars" : 0,
    "quote-props"    : [2, "as-needed", {keywords: true}]
  },

  /**
   * for no-undef.
   *
   * @see http://eslint.org/docs/user-guide/configuring#specifying-globals
   */
  globals: {}
};
