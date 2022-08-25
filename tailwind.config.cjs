/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      ubuntu: 'Ubuntu',
      roboto: 'Roboto',
    },
    colors: {
      white: '#ffffff',
      black: '#150C21',
      purple: '#7764F2',
      gray: {
        light: '#F4F4F4',
        DEFAULT: '#6A6A6A',
        dark: '#545454',
      },
      twitter: '#038BDE',
      github: '#24292E',
      linkedin: '#0A66C2',
      malt: '#FC5656',
    },
  },
  plugins: [],
}
