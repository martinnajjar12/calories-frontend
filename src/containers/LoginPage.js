import { Grid, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import login from '../actions/login';
import commonStyles from '../utils/commonStyles';
import FormTitle from '../components/FormTitle';
import Header from '../components/Header';
import LoginForm from '../components/LoginForm';
import CustomAlert from '../components/CustomAlert';

const defaultState = {
  email: '',
  password: '',
};

const LoginPage = () => {
  const commonClasses = commonStyles();
  const [state, setState] = useState(defaultState);
  const dispatch = useDispatch();

  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e, info) => {
    e.preventDefault();
    dispatch(login(info));
  };

  return (
    <>
      <Header title="Calories Tracker" isLogged={false} />
      <FormTitle title="Login" />
      <LoginForm state={state} changeHandler={handleChange} submitHandler={handleSubmit} />
      <Grid container alignItems="center" justify="center">
        <Typography color="textSecondary">Don&apos;t have an account?&nbsp;</Typography>
        <Link className={commonClasses.anchorText} to="/registration"><Typography color="primary">Create Account</Typography></Link>
      </Grid>
      <CustomAlert />
    </>
  );
};

export default LoginPage;
