import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import FormTitle from './FormTitle';
import RegistrationForm from './RegistrationForm';
import Header from './Header';
import register from '../actions/register';

const defaultState = {
  name: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  age: '',
  gender: '',
  height: '',
  weight: '',
  activity: '',
};

const RegistrationPage = () => {
  const [state, setState] = useState(defaultState);
  const dispatch = useDispatch();

  const handleChange = e => setState({
    ...state,
    [e.target.name]: e.target.value,
  });

  const handleSubmit = info => dispatch(register(info));

  return (
    <>
      <Header title="Calories Tracker" isLogged={false} />
      <FormTitle title="Register" />
      <RegistrationForm handleChange={handleChange} handleSubmit={handleSubmit} state={state} />
    </>
  );
};

export default RegistrationPage;
