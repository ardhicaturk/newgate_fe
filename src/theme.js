import { createMuiTheme } from '@material-ui/core/styles';
import MuliWoff2 from './assets/fonts/muli/muli-v20-latin-regular.woff2';

const muli = {
    fontFamily: 'Muli',
    fontStyle: 'normal',
    fontWeight: 500,
    src: `url(${MuliWoff2}) format('woff2)`
}

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#0f4c81',
      },
      secondary: {
        main: '#CCEDD2',
        contrastText: '#1b262c',
      },
      error:{
          main: '#ed6663'
      },
      warning: {
          main: '#ffa372'
      },
      background: {
        default: '#effcef'
      },
      type: 'light',
      contrastThreshold: 3,
      tonalOffset: 0.2,

      typography: {
          fontFamily: ['Muli']
      },
      overrides: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': [muli]
            }
        }
      }
    },
  });

export default theme;