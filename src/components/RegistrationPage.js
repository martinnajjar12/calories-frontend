import {
  Card,
  CardMedia,
  makeStyles,
} from '@material-ui/core';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import FormTitle from './FormTitle';
import UserForm from './UserForm';

const defaultState = {
  name: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  age: 0,
  gender: '',
  height: 0,
  weight: 0,
  activity: '',
};

const useStyles = makeStyles({
  root: {
    boxShadow: 'none',
    marginTop: 40,
    backgroundColor: '#fafafa',
  },
  cardHeight: {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: 0,
    maxWidth: 300,
    paddingBottom: 125,
    margin: '0 auto',
  },
});

const LoginPage = ({ setLoggedIn }) => {
  const classes = useStyles();
  const [state, setState] = useState(defaultState);

  const handleChange = e => setState({
    ...state,
    [e.target.name]: e.target.value,
  });

  const handleSubmit = info => {
    axios.post('http://localhost:3000/auth', info)
      .then(response => {
        if (response.status === 200) {
          setLoggedIn(true);
          setState(defaultState);
        }
      });
  };

  return (
    <>
      <Card className={classes.root}>
        <CardMedia
          className={classes.cardHeight}
          image="calories.png"
        />
      </Card>
      <FormTitle />
      <UserForm handleChange={handleChange} handleSubmit={handleSubmit} state={state} />
    </>
  );
};

LoginPage.propTypes = {
  setLoggedIn: PropTypes.func.isRequired,
};

export default LoginPage;
