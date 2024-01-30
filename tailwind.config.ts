import type { Config } from 'tailwindcss';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const radixColors = require('@radix-ui/colors');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createPlugin } = require('windy-radix-palette');

// -----------------------------------------------------------------------------
// Radix colors
// -----------------------------------------------------------------------------

const colors = createPlugin({
  colors: {
    gray: radixColors.grayDark,
    red: radixColors.redDark,
    yellow: radixColors.yellowDark,
    green: radixColors.greenDark,
    blue: radixColors.blueDark,
    orange: radixColors.orangeDark,
  },
});

// -----------------------------------------------------------------------------
// Tailwind configuration
// -----------------------------------------------------------------------------

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [colors.plugin],
};
export default config;
