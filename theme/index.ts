import { createTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#636BFB',
      200: '#93A4FC'
    },
    secondary: {
      main: '#B3BDFD'
    },
    error: {
      main: '#FF000080'
    },
    background: {
      default: '#fff'
    },
    text: {
      secondary: '#B2BFC8'
    }
  },
  typography: {
    h1: {
      fontSize: 30,
      lineHeight: '38px',
      fontWeight: 'bold'
    },
    h2: {
      fontSize: 26,
      lineHeight: '30px',
      fontWeight: 'bold'
    },
    h3: {
      fontSize: 18,
      lineHeight: '24px',
      fontWeight: 'bold'
    }
  },
  overrides: {
    MuiButton: {
      contained: {
        boxShadow: 'none',
        '&$disabled': {
          backgroundColor: 'rgba(99,107,251, 0.5)',
          color: '#ffffff'
        }
      },
      text: {
        color: '#ffffff'
      },
      containedPrimary: {
        color: '#ffffff',
        borderRadius: 24
      },
      outlinedPrimary: {
        borderRadius: 24
      }
    },
    MuiOutlinedInput: {
      root: {
        color: '#ffffff'
      },
      notchedOutline: {
        borderColor: '#ffffff'
      }
    },
    MuiSelect: {
      iconOutlined: {
        color: '#ffffff'
      }
    },
    MuiLinearProgress: {
      root: {
        height: 12,
        borderRadius: 10
      },
      bar: {
        borderRadius: 10
      },
      colorPrimary: {
        backgroundColor: '#F1F2F7'
      }
    },
    MuiListItemAvatar: {
      root: {
        minWidth: 'initial',
        marginRight: 16
      }
    }
  }
});

export default theme;
