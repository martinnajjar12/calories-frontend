import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import Header from './components/Header';
import LoginPage from './components/LoginPage';
import NavigationBar from './components/NavigationBar';

const loggedIn = false;
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

const App = () => {
  if (loggedIn) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header title="name" />
        <NavigationBar />
      </ThemeProvider>
    );
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header title="Calories Tracker" />
      <LoginPage />
    </ThemeProvider>
  );
};

export default App;
