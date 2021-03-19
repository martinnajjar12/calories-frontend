import {
  unstable_createMuiStrictModeTheme as createMuiTheme,
  CssBaseline,
  ThemeProvider,
} from '@material-ui/core';
import { useState } from 'react';
import Header from './components/Header';
// import RegistrationPage from './components/RegistrationPage';
import NavigationBar from './components/NavigationBar';
import LoginPage from './components/LoginPage';

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
  const [loggedIn, setLoggedIn] = useState(false);
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
      <LoginPage setLoggedIn={setLoggedIn} />
    </ThemeProvider>
  );
};

export default App;
