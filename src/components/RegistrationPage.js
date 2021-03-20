import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import FormTitle from './FormTitle';
import RegistrationForm from './RegistrationForm';
import Header from './Header';

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

const RegistrationPage = ({ setLoggedIn }) => {
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
      <Header title="Calories Tracker" />
      <FormTitle title="Register" />
      <RegistrationForm handleChange={handleChange} handleSubmit={handleSubmit} state={state} />
    </>
  );
};

RegistrationPage.propTypes = {
  setLoggedIn: PropTypes.func,
};

RegistrationPage.defaultProps = {
  setLoggedIn: () => true,
};

export default RegistrationPage;
