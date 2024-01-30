// eslint-disable-next-line @typescript-eslint/no-var-requires
const radixColors = require('@radix-ui/colors');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createPlugin } = require('windy-radix-palette');

// -----------------------------------------------------------------------------
// Radix colors
// -----------------------------------------------------------------------------

const colors = createPlugin({
  colors: {
    gray: radixColors.gray,
    red: radixColors.red,
    yellow: radixColors.yellow,
    green: radixColors.green,
    blue: radixColors.blue,
    orange: radixColors.orange,
  },
});

// -----------------------------------------------------------------------------
// Tailwind configuration
// -----------------------------------------------------------------------------

const config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [colors.plugin],
  presets: [],
};

export default config;
