import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const MemberProtectedRoute = ({ isLogged, component: Component, ...rest }) => (
  <Route
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...rest}
    render={({ location }) => {
      if (isLogged) return <Redirect to={{ pathname: '/' }} from={location.pathname} />;
      return <Component />;
    }}
  />
);

MemberProtectedRoute.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};

export default MemberProtectedRoute;
