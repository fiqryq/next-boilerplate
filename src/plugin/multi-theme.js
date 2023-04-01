const plugin = require('tailwindcss/plugin');

function getRgbChannels(hex) {
  hex = hex.replace('#', '');
  const decimal = parseInt(hex, 16);
  const red = (decimal >> 16) & 255;
  const green = (decimal >> 8) & 255;
  const blue = decimal & 255;
  return `${red} ${green} ${blue}`;
}

function getCssVariableDeclarations(input, path = [], output = {}) {
  Object.entries(input).forEach(([key, value]) => {
    const newPath = path.concat(key);
    if (typeof value !== 'string') {
      getCssVariableDeclarations(value, newPath, output);
    } else {
      output[`--${newPath.join('-')}`] = getRgbChannels(value);
    }
  });
  return output;
}

function getColorUtilitiesWithCssVariableReferences(input, path = []) {
  return Object.fromEntries(
    Object.entries(input).map(([key, value]) => {
      const newPath = path.concat(key);
      if (typeof value !== 'string') {
        return [
          key,
          getColorUtilitiesWithCssVariableReferences(value, newPath)
        ];
      } else {
        return [key, `rgb(var(--${newPath.join('-')}) / <alpha-value>)`];
      }
    })
  );
}

function checkForValidColorThemesInput(input) {
  const isValid =
    typeof input === 'object' &&
    Object.keys(input).some(key => typeof input[key] === 'object');
  if (!isValid) {
    throw new Error(
      'The Multi-Theme Plugin expects a `colorThemes` option passed to it, which contains at least one theme object.'
    );
  }
}

module.exports = plugin.withOptions(
  function (options) {
    const { colorThemes } = options;
    checkForValidColorThemesInput(colorThemes);
    return function ({ addBase }) {
      addBase({
        ':root': getCssVariableDeclarations(Object.values(colorThemes)[0])
      });
      Object.entries(colorThemes).forEach(([key, value]) => {
        addBase({
          [`[data-theme="${key}"]`]: getCssVariableDeclarations(value)
        });
      });
    };
  },
  function (options) {
    const { colorThemes } = options;
    checkForValidColorThemesInput(colorThemes);
    return {
      theme: {
        extend: {
          colors: getColorUtilitiesWithCssVariableReferences(
            Object.values(colorThemes)[0]
          )
        }
      }
    };
  }
);
