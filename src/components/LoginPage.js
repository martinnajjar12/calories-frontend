import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import LoginForm from './LoginForm';

const LoginPage = () => (
  <>
    <Header title="Calories Tracker" />
    <LoginForm />
    <Link to="/registration"><Button color="primary" variant="contained">Register</Button></Link>
  </>
);

export default LoginPage;
