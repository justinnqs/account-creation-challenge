/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/frontend/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsla(244,49%,49%,1)',
          light: 'hsla(244,49%,49%,1)',
        },

        // Text colors
        text: {
          primary: 'hsla(243,30.3%,12.94%, 1)',
          secondary: 'hsla(0, 0%, 40%, 1)',
          disabled: 'hsla(0, 0%, 80%, 1)',
        },

        // Button states
        button: {
          primary: 'hsla(244,49%,49%,1)',
          primaryText: 'hsla(0, 0%, 100%, 1)',
          secondary: 'hsla(0, 0%, 100%, 1)',
          secondaryText: 'hsla(244,49%,49%,1)',
          disabled: 'hsla(0, 0%, 80%, 1)',
          disabledText: 'hsla(0, 0%, 40%, 1)',
          hover: 'hsla(244, 53%, 54%, 1)',
        },

        error: {
          dark: 'hsla(353.52,97.78%,35.29%,1)',
          light: 'hsl(349.41,54.84%,93.92%,1)',
        },
      },
      boxShadow: {
        card: '0 2px 6px #0000001a',
      },
    },
  },
  plugins: [],
};
