/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  important: true,
  mode: "JIT",
  content: ["./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".word-break": {
          "word-break": "break-word",
        },
      });
    }),
  ],
};
