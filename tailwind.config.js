const { withTV } = require('tailwind-variants/transformer');
const multiThemePlugin = require('./src/plugin/multi-theme.js');
const color = require('./src/constant/color.json');

/** @type {import('tailwindcss').Config} */

module.exports = withTV({
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [multiThemePlugin({ colorThemes: color })]
});
