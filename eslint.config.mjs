import globals from "globals";
import js from "@eslint/js";
import pluginVue from 'eslint-plugin-vue';
import tsLint from 'typescript-eslint';

export default [
  {
    files: ["./src/**/*.{js,mjs,cjs,ts,mts,jsx,tsx}"]
  },
  {
      files: ["*.vue", "**/*.vue"],
      languageOptions: {
          parserOptions: {
              parser: tsLint.parser,
              sourceType: "module"
          }
      }
  },
  js.configs.recommended,
  ...tsLint.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  {
    plugins: {},

    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.node,
        },

        ecmaVersion: 2021,
        sourceType: "commonjs",
    },

    rules: {},
}];
