import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginReactRefresh from "eslint-plugin-react-refresh";

export default [
  {
    ignores: ["dist/", ".eslintrc.cjs"], // Corresponds to ignorePatterns
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      parser: tseslint.parser, // Corresponds to parser: '@typescript-eslint/parser'
      parserOptions: {
        ecmaFeatures: { jsx: true }, // Standard for React
      },
      globals: {
        ...globals.browser, // Corresponds to env: { browser: true }
        ...globals.es2020, // Corresponds to env: { es2020: true }
      },
    },
  },
  ...tseslint.configs.recommended, // Corresponds to 'plugin:@typescript-eslint/recommended'
  {
    // Configuration for React Hooks
    plugins: {
      "react-hooks": pluginReactHooks,
    },
    rules: pluginReactHooks.configs.recommended.rules, // Corresponds to 'plugin:react-hooks/recommended'
  },
  {
    // Configuration for React Refresh
    plugins: {
      "react-refresh": pluginReactRefresh,
    },
    rules: {
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    },
  },
  // 'eslint:recommended' is often included by default or within other recommended configs like tseslint.configs.recommended.
  // If specific rules from eslint:recommended are needed and not covered, they might need to be added.
];
