module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
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
        DEFAULT: '#6A6A6A',
        white: '#F4F4F4'
      },
      twitter: '#1DA1F2',
      github: '#24292E',
      linkedin: '#0A66C2'
    },
    screens: {
      '1': '320px',
      '2': '380px',
      '3': '440px',
      '4': '500px',
      '6': '700px',
      '7': '1024px',
      '8': '1280px',
      '9': '1680px'
    },
    extend: {
      width: {
        '140': '120px',
        '200': '40rem'
      },
      height: {
        '45': '40px'
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
