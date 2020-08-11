import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1D7874'
    }
  },
  breakpoints: {
    values: {
      xxs: 0,
      xs: 375,
      sm: 576,
      md: 768,
      lg: 960,
      xl: 1280,
      xxl: 1440
    },
  },
});

export default theme;
