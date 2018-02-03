module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier",
    "prettier/react"
  ],
  rules: {
    "react/jsx-filename-extension": 0,
    "no-new": 0,
    "react/no-find-dom-node": 0,
    "import/no-webpack-loader-syntax": 0
  },
  env: {
    browser: true,
    node: true,
    jasmine: true
  },
  parser: "babel-eslint",
  plugins: ["react"],
  parserOptions: {
    ecmaVersion: 7,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  }
};
