const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.coolGray,
      white: 'white',
      black: 'black',
      scissors: {
        light: 'hsl(39, 89%, 49%)',
        lighter: 'hsl(40, 84%, 53%)',
      },
      paper: {
        light: 'hsl(230, 89%, 62%)',
        lighter: 'hsl(230, 89%, 65%)',
      },
      rock: {
        light: 'hsl(349, 71%, 52%)',
        lighter: 'hsl(349, 70%, 56%)',
      },
      lizard: {
        light: 'hsl(261, 73%, 60%)',
        lighter: 'hsl(261, 72%, 63%)',
      },
      cyan: {
        light: 'hsl(189, 59%, 53%)',
        lighter: 'hsl(189, 58%, 57%)',
      },
      neutral: {
        dark: 'hsl(229, 25%, 31%)',
        score: 'hsl(229, 64%, 46%)',
        header: 'hsl(217, 16%, 45%)',
        'grad-from': 'hsl(214, 47%, 23%)',
        'grad-to': 'hsl(237, 49%, 15%)',
      },
    },
    fontFamily: {
      barlow: ['Barlow Semi Condensed', 'sans-serif'],
    },
    letterSpacing: {
      tightest: '-.075em',
      tight: '-.025em',
      normal: '0',
      wider: '.05em',
      widest: '.25em',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-radial-center':
          'radial-gradient(at top, var(--tw-gradient-stops))',
      },
      fill: {
        transparent: 'transparent',
      },
      spacing: {
        100: '30rem',
        110: '44rem',
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ['hover', 'focus'],
    },
  },
  plugins: [],
};
