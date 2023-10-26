module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  ignorePatterns: ["build/*", "dist/*", "node_modules/*"],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'quotes': 'off',
    'camelcase': 'off',
    'semi': [2, "always"],
    'no-console': 'warn',
    'no-unused-vars': 'warn',
    'no-unreachable': 'warn',
    'no-redeclare': 'warn',
    // add
    'react/no-unescaped-entities': 'off',
    'padded-blocks': 'off',
    'space-before-function-paren': 'off',
    'array-bracket-spacing': 'off',
    'object-curly-spacing': 'off',
    'semi': 'off',
    'no-trailing-spaces': 'off',
    'react/jsx-no-comment-textnodes': 'off',
    'no-multiple-empty-lines': 'off',
  }
}
