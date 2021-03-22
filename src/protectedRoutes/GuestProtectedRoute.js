import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const GuestProtectedRoute = ({ isLogged, component: Component, ...rest }) => (
  <Route
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...rest}
    render={({ location }) => {
      if (isLogged) return <Component />;
      return <Redirect to="/welcome" from={location.pathname} />;
    }}
  />
);

GuestProtectedRoute.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};

export default GuestProtectedRoute;
