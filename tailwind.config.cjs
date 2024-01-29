const defaultTheme = require('tailwindcss/defaultTheme')

function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`
    }
    return `rgb(var(${variable}) / ${opacityValue})`
  }
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['Oswald Variable', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        primary: withOpacityValue('--brand-primary'),
        secondary: withOpacityValue('--brand-secondary'),
        background: withOpacityValue('--brand-background'),
        bgfooter: withOpacityValue('--brand-footer'),
        gray2: withOpacityValue('--brand-gray2'),
        gray3: withOpacityValue('--brand-gray3'),
        gray4: withOpacityValue('--brand-gray4'),
        textblue: withOpacityValue('--brand-text'),
        gray: withOpacityValue('--brand-gray'),
        gradient1: withOpacityValue('--brand-gradient1'),
        gradient2: withOpacityValue('--brand-gradient2'),
        gradient3: withOpacityValue('--brand-gradient3'),
        highlighted: withOpacityValue('--brand-highlighted'),
        gray5: withOpacityValue('--brand-gray5')
      },
      lineHeight: {
        14: '3.5rem'
      },
      boxShadow: {
        custom: '0px 0px 10px 3px rgba(0, 0, 0, 0.27)'
      },
      spacing: {
        128: '32rem',
        136: '34rem',
        140: '35rem',
        156: '39rem',
        180: '45rem'
      }
    }
  },
  plugins: [require('@tailwindcss/typography'), require('tailwindcss-animate')]
}
