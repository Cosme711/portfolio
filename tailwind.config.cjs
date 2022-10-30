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
      github: '#24292E',
      linkedin: '#0A66C2',
      malt: '#FC5656',
    },
    boxShadow: {
      box: 'inset 0px 1px 1px 0px rgba(255, 255, 255, 0.1), 0px 50px 100px -20px rgba(0, 0, 0, 0.3), 0px 30px 60px -30px rgba(50, 50, 93, 0.25)',
    },
    gridTemplateColumns: {
      auto: 'repeat(auto-fit, minmax(0, 1fr))',
    },
  },
  plugins: [],
}
