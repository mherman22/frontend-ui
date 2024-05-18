/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme'

export const content = ["./src/**/*.{html,js,jsx}"]
export const darkMode = "class"
export const theme = {
  extend: {
    fontFamily: {
      sans: ['Inter var', ...defaultTheme.fontFamily.sans],
    },
    colors: {
      "primary1": '#2A445D',
      "secondary1": '#415B75',
      'orange': '#F08014',
      'success': '#20b799',
      'info': '#3cbade',
      'warning': '#efb540',
      'danger': '#fa5944',
      'light': '#e9edf3',
      'dark': '#222a3e',
      'body-bg': '#F6F7FB',
    },

    transitionProperty: {
      'height': 'height',
      'o-m': 'opacity,margin',
    },

    minWidth: theme => ({
      ...theme('width'),
    }),

    maxWidth: theme => ({
      ...theme('width'),
    }),

    minHeight: theme => ({
      ...theme('height'),
    }),

    maxHeight: theme => ({
      ...theme('height'),
    }),
  },
}
export const plugins = [
  require('preline/plugin'),
  require('@tailwindcss/forms'),
  require('@tailwindcss/typography'),
  require('@tailwindcss/aspect-ratio'),
]