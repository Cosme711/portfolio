module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
  ],
  theme: {
    fontFamily: {
      'ubuntu': ['Ubuntu'],
      'roboto': ['Roboto'] 
    },
    colors :{
      white: '#ffffff',
      black: '#150C21',
      purple: '#7764F2',
      gray: {
        dark: '#545454',
        midlle: '#6A6A6A',
        white: '#F4F4F4'
      },
      twitter: '#038BDE',
      github: '#24292E',
      linkedin: '#0A66C2'
    },
    screens: {
      '1': '345px',
      '2': '380px',
      '3': '440px',
      '4': '500px',
      '5': '550px',
      '6': '795px',
      '7': '1024px',
      '8': '1280px',
      '9': '1550px',
      '10': '1680px'
    },
    maxWidth: {
      '500': '500px'
    },
    extend: {
      width: {
        '140': '120px',
        '200': '40rem'
      },
      height: {
        '45': '40px',
        '80': '400px'
      },
      margin: {
        '52': '8rem',
        '140': '48rem',
        'auto': 'auto'
      },
      padding: {
        'auto': 'auto'
      }
    }
  },
  variants: {},
  plugins: [],
}
