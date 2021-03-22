import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import commonStyles from '../utils/commonStyles';
import FormTitle from './FormTitle';
import Header from './Header';
import LoginForm from './LoginForm';

const LoginPage = () => {
  const commonClasses = commonStyles();
  return (
    <>
      <Header title="Calories Tracker" isLogged={false} />
      <FormTitle title="Login" />
      <LoginForm />
      <Grid container alignItems="center" justify="center">
        <Typography color="textSecondary">Don&apos;t have an account?&nbsp;</Typography>
        <Link className={commonClasses.anchorText} to="/registration"><Typography color="primary">Create Account</Typography></Link>
      </Grid>
    </>
  );
};

export default LoginPage;
