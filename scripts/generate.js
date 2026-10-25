const palettes = require('../src/palettes');
const buildTheme = require('../src/theme-builder');

module.exports = function generate() {
  return {
    base: buildTheme(palettes.base),
    soft: buildTheme(palettes.soft),
    intense: buildTheme(palettes.intense)
  };
};
