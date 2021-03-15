const colors = require('tailwindcss/colors');

module.exports = {
  purge: {
    enabled: true,
    preserveHtmlElements: false,
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    options: {
      safelist: ["dark"],
    },
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.coolGray,
      white: 'white',
      black: 'black',
      paper: {
        light: 'hsl(230, 89%, 62%)',
        lighter: 'hsl(230, 89%, 65%)',
      },
      scissors: {
        light: 'hsl(39, 89%, 49%)',
        lighter: 'hsl(40, 84%, 53%)',
      },
      rock: {
        light: 'hsl(349, 71%, 52%)',
        lighter: 'hsl(349, 70%, 56%)',
      },
      lizard: {
        light: 'hsl(261, 73%, 60%)',
        lighter: 'hsl(261, 72%, 63%)',
      },
      spock: {
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
        triangle: 'url("../src/images/bg-triangle.svg")',
        pentagon: 'url("../src/images/bg-pentagon.svg")',
      },
      fill: {
        transparent: 'transparent',
      },
      spacing: {
        100: '30rem',
        110: '44rem',
      },
      backgroundSize: {
        '50%': '50%',
        '75%': '75%',
      },
      borderWidth: {
        '0.5-rem': '0.5rem',
        '0.75-rem': '0.75rem',
        '1-rem': '1rem',
        '1.5-rem': '1.5rem',
        '2-rem': '2rem',
      },
      gridTemplateRows: {
        // 1fr 1.2fr 1fr
        '1-1.2-1': '1fr 1.2fr 1fr',
        // 1fr 1.5fr 1fr
        '1-1.5-1': '1fr 1.5fr 1fr',
      },
      boxShadow: {
        rock: 'inset 0 0.5em rgba(0,0,0,.2), 0 0.5em hsla(349, 71%, 52%, 70%)',
        'rock-sm':
          'inset 0 0.25em rgba(0,0,0,.2), 0 0.25em hsla(349, 71%, 52%, 70%)',
        paper: 'inset 0 0.5em rgba(0,0,0,.2), 0 0.5em hsla(230, 89%, 62%, 70%)',
        'paper-sm':
          'inset 0 0.25em rgba(0,0,0,.2), 0 0.25em hsla(230, 89%, 62%, 70%)',
        scissors:
          'inset 0 0.5em rgba(0,0,0,.2), 0 0.5em hsla(39, 89%, 49%, 70%)',
        'scissors-sm':
          'inset 0 0.25em rgba(0,0,0,.2), 0 0.25em hsla(39, 89%, 49%, 70%)',
        lizard:
          'inset 0 0.5em rgba(0,0,0,.2), 0 0.5em hsla(261, 73%, 60%, 70%)',
        'lizard-sm':
          'inset 0 0.25em rgba(0,0,0,.2), 0 0.25em hsla(261, 73%, 60%, 70%)',
        spock: 'inset 0 0.5em rgba(0,0,0,.2), 0 0.5em hsla(189, 59%, 53%, 70%)',
        'spock-sm':
          'inset 0 0.25em rgba(0,0,0,.2), 0 0.25em hsla(189, 59%, 53%, 70%)',
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
