const colors = {
  black: 'black',
  white: '#FDFDFC',
  purple: '#3E2E9A',
  lightPurple: '#46389F',
  lightGrey: '#E9E9F5'
}

const theme = {
  colors: {
    'bg-primary': colors.white,
    'bg-secondary': colors.purple,
    'btn-primary': colors.white,
    'btn-secondary': colors.purple,
    'btn-terciary': colors.lightPurple,
    'btn-fourth': colors.lightGrey,
    'font-primary': colors.black,
    'font-secondary': colors.white,
    'font-terciary': colors.purple,
    'font-fourth': colors.lightPurple,
    'font-fifth': colors.lightGrey
  },
  dimension: {
    width: window.screen.width,
    height: window.screen.height
  },
  fonts: {
    'font-title': "'Poppins', sans-serif",
    'font-primary': "'Lato', sans-serif"
  }
}

export { theme }
