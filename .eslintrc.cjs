/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "prettier",
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  rules: {
    "no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    "vue/block-order": [
      "error",
      {
        order: [
          "template",
          "script:not([setup])",
          "script[setup]",
          "style:not([scoped])",
          "style[scoped]",
        ],
      },
    ],
    "vue/component-api-style": ["error", ["script-setup"]],
  },
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
