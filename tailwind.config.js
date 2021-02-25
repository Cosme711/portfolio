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
      }
    },
    extend: {
      width: {
        '140': '140px'
      },
      height: {
        '45': '45px'
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
