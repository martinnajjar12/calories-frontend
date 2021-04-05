import {
  Container,
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
import LoginPage from './containers/LoginPage';
import Meals from './containers/Meals';
import MemberPage from './containers/MemberPage';
import Progress from './components/Progress';
import RegistrationPage from './containers/RegistrationPage';
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
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 600,
      xl: 600,
    },
  },
});

const App = () => {
  const { isLogged } = useSelector(state => state.sessionState);
  const { isRegisteredAndLogged } = useSelector(state => state.registrationState);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Container>
          <Switch>
            <GuestProtectedRoute isRegisteredAndLogged={isRegisteredAndLogged} isLogged={isLogged} exact path="/" component={MemberPage} />
            <MemberProtectedRoute isRegisteredAndLogged={isRegisteredAndLogged} isLogged={isLogged} exact path="/login" component={LoginPage} />
            <MemberProtectedRoute isRegisteredAndLogged={isRegisteredAndLogged} isLogged={isLogged} exact path="/welcome" component={GuestPage} />
            <MemberProtectedRoute isRegisteredAndLogged={isRegisteredAndLogged} isLogged={isLogged} exact path="/registration" component={RegistrationPage} />
            <GuestProtectedRoute isRegisteredAndLogged={isRegisteredAndLogged} isLogged={isLogged} exact path="/meals" component={Meals} />
            <GuestProtectedRoute isRegisteredAndLogged={isRegisteredAndLogged} isLogged={isLogged} exact path="/progress" component={Progress} />
            <GuestProtectedRoute isRegisteredAndLogged={isRegisteredAndLogged} isLogged={isLogged} path="/more" component={More} />
          </Switch>
        </Container>
      </BrowserRouter>
      <CssBaseline />
    </ThemeProvider>
  );
};

export default App;
