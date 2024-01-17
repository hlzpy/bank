/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.ts',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          light: '#e0faff',
          DEFAULT: '#00a6c9',
          alt: '#3080dd',
          dark: '#4484D1',
          darkest: '#336599',
        },
        red: {
          light: 'rgba(246, 34,45, 0.1)',
          DEFAULT: '#f6222d',
        },
        yellow: {
          light: 'rgba(255, 180, 38, 0.1)',
          DEFAULT: '#ffb426',
          dark: '#d1660f',
        },
        green: {
          light: 'rgb(120, 203, 29, 0.1)',
          DEFAULT: '#78cb1d',
          dark: '#5a9916',
        },
        purple: {
          DEFAULT: '#A58BD3',
          dark: '#6E62B5',
        },
        pink: {
          DEFAULT: '#DC88E6',
        },
        gray: {
          light: '#f5f6f7',
          semilight: '#e4e5e7',
          DEFAULT: '#c3c8cc',
          dark: '#9397a2',
          border: '#d9d9d9',
        },
        white: '#fff',
        black: '#000',
        font: {
          light: '#9397a2',
          DEFAULT: '#636a74',
          dark: '#1d222a',
        },
      },
      spacing: {
        13: '3.25rem',
        18: '4.5rem',
        112: '28rem',
        120: '30rem',
        128: '32rem',
        144: '36rem',
        160: '40rem',
      },
      lineHeight: {
        12: '3rem',
        13: '3.25rem',
      },
      minWidth: {
        8: '2rem',
      },
    },
    fontSize: {
      xs: '0.75rem', // 12px
      sm: '0.8125rem', // 13px
      base: '0.875rem', // 14px
      lg: '1rem', // 16px
      ml: '1.125rem', // 18px
      xl: '1.25rem', // 20px
    },
  },
  variants: {
    extend: {
      borderStyle: ['hover'],
      borderWidth: ['hover'],
    },
  },
  plugins: [],
};
