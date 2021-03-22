import {
  CssBaseline,
  ThemeProvider,
  unstable_createMuiStrictModeTheme as createMuiTheme,
} from '@material-ui/core';
import {
  BrowserRouter,
  Switch,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import GuestPage from './components/GuestPage';
import LoginPage from './components/LoginPage';
import Meals from './components/Meals';
import MemberPage from './components/MemberPage';
import Progress from './components/Progress';
import RegistrationPage from './components/RegistrationPage';
import More from './components/More';
import MemberProtectedRoute from './protectedRoutes/MemberProtectedRoute';
import GuestProtectedRoute from './protectedRoutes/GuestProtectedRoute';

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
  const { isLogged } = useSelector(state => state.sessionReducer);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <GuestProtectedRoute isLogged={isLogged} exact path="/" component={MemberPage} />
          <MemberProtectedRoute isLogged={isLogged} exact path="/login" component={LoginPage} />
          <MemberProtectedRoute isLogged={isLogged} exact path="/welcome" component={GuestPage} />
          <MemberProtectedRoute isLogged={isLogged} exact path="/registration" component={RegistrationPage} />
          <GuestProtectedRoute isLogged={isLogged} exact path="/meals" component={Meals} />
          <GuestProtectedRoute isLogged={isLogged} exact path="/progress" component={Progress} />
          <GuestProtectedRoute isLogged={isLogged} path="/more" component={More} />
        </Switch>
      </BrowserRouter>
      <CssBaseline />
    </ThemeProvider>
  );
};

export default App;
