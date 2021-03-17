import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import Header from './components/Header';
import NavigationBar from './components/NavigationBar';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#62b5e5',
    },
    text: {
      primary: '#fff',
    },
  },
  typography: {
    fontFamily: [
      '"Helvetica Neue"',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Header />
    <NavigationBar />
  </ThemeProvider>
);

export default App;
