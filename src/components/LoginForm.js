import {
  Button,
  FormControl,
  Input,
  InputLabel,
} from '@material-ui/core';
import axios from 'axios';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import commonStyles from '../utils/commonStyles';

const defaultState = {
  email: '',
  password: '',
};

const LoginForm = ({ setLoggedIn }) => {
  const [state, setState] = useState(defaultState);
  const commonClasses = commonStyles();

  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = info => {
    axios.post('http://localhost:3000/auth/sign_in', info)
      .then(() => {
        setLoggedIn(true);
      });
  };

  return (
    <form className={`${commonClasses.centerVertically} ${commonClasses.topMargin40} ${commonClasses.bottomMargin50}`}>
      <FormControl className={commonClasses.topMargin15}>
        <InputLabel htmlFor="email">Email</InputLabel>
        <Input
          className={commonClasses.darkText}
          value={state.email}
          name="email"
          onChange={e => handleChange(e)}
          id="email"
          type="email"
          required
        />
      </FormControl>
      <FormControl className={commonClasses.topMargin15}>
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input
          className={commonClasses.darkText}
          value={state.password}
          name="password"
          onChange={e => handleChange(e)}
          id="password"
          type="password"
          required
        />
      </FormControl>
      <Button
        onClick={() => handleSubmit(state)}
        className={`${commonClasses.topMargin30} ${commonClasses.whiteText}`}
        variant="contained"
        color="primary"
      >
        LOGIN
      </Button>
    </form>
  );
};

LoginForm.propTypes = {
  setLoggedIn: PropTypes.func,
};

LoginForm.defaultProps = {
  setLoggedIn: () => true,
};

export default LoginForm;
