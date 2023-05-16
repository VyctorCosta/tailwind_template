module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: ["react", "@typescript-eslint", "react-hooks", "import"],
  rules: {
    semi: ["warn"],
    quotes: ["warn", "double"],
    camelcase: ["warn", { properties: "never", ignoreImports: true }],
    "jsx-quotes": ["error", "prefer-double"],
    "comma-dangle": ["warn", "always-multiline"],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        vars: "local",
        args: "all",
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
    "space-before-function-paren": "off",
    "react/react-in-jsx-scope": "off",
    "multiline-ternary": "off",
    "prefer-promise-reject-errors": "off",
    "no-empty": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "no-unused-vars": "off",
  },
};
