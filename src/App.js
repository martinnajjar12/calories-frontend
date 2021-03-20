import {
  CssBaseline,
  ThemeProvider,
  unstable_createMuiStrictModeTheme as createMuiTheme,
} from '@material-ui/core';
import { useState } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import GuestPage from './components/GuestPage';
import LoginPage from './components/LoginPage';
import Meals from './components/Meals';
import MemberPage from './components/MemberPage';
import Progress from './components/Progress';
import RegistrationPage from './components/RegistrationPage';
import More from './components/More';

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
  const [loggedIn] = useState(true);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {loggedIn ? <MemberPage /> : <GuestPage />}
          </Route>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/registration" component={RegistrationPage} />
          <Route exact path="/meals" component={Meals} />
          <Route exact path="/progress" component={Progress} />
          <Route exact path="/more" component={More} />
        </Switch>
      </BrowserRouter>
      <CssBaseline />
    </ThemeProvider>
  );
};

export default App;
