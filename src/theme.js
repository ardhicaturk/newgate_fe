import { createMuiTheme } from '@material-ui/core/styles';
import MuliWoff2 from './assets/fonts/muli/muli-v20-latin-regular.woff2';

const muli = {
  fontFamily: 'Muli',
  fontStyle: 'normal',
  fontWeight: 500,
  src: `url(${MuliWoff2}) format('woff2)`
}

let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0f4c81',
    },
    secondary: {
      main: '#CCEDD2',
      contrastText: '#1b262c',
    },
    error: {
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
    shape: {
      borderRadius: 8,
    },
    props: {
      MuiTab: {
        disableRipple: true,
      },
    },
    mixins: {
      toolbar: {
        minHeight: 48,
      },
    },
    typography: {
      fontFamily: ['Muli'],
      h5: {
        fontWeight: 500,
        fontSize: 26,
        letterSpacing: 0.5,
      },
    }
  },
});
theme = {
  ...theme,
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [muli]
      }
    },
    MuiDrawer: {
      paper: {
        backgroundColor: '#18202c',
      },
    },
    MuiButton: {
      label: {
        textTransform: 'none',
      },
      contained: {
        boxShadow: 'none',
        '&:active': {
          boxShadow: 'none',
        },
      },
    },
    MuiTabs: {
      root: {
        marginLeft: theme.spacing(1),
      },
      indicator: {
        height: 3,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        backgroundColor: theme.palette.common.white,
      },
    },
    MuiTab: {
      root: {
        textTransform: 'none',
        margin: '0 16px',
        minWidth: 0,
        padding: 0,
        [theme.breakpoints.up('md')]: {
          padding: 0,
          minWidth: 0,
        },
      },
    },
    MuiIconButton: {
      root: {
        padding: theme.spacing(1),
      },
    },
    MuiTooltip: {
      tooltip: {
        borderRadius: 4,
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: '#404854',
      },
    },
    MuiListItemText: {
      primary: {
        fontWeight: theme.typography.fontWeightMedium,
      },
    },
    MuiListItemIcon: {
      root: {
        color: 'inherit',
        marginRight: 0,
        '& svg': {
          fontSize: 20,
        },
      },
    },
    MuiAvatar: {
      root: {
        width: 32,
        height: 32,
      },
    },
  },
};
export default theme;