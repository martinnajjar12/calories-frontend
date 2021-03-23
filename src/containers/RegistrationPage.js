import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import FormTitle from '../components/FormTitle';
import RegistrationForm from '../components/RegistrationForm';
import Header from '../components/Header';
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

  const handleSubmit = (e, info) => {
    e.preventDefault();
    dispatch(register(info));
  };

  return (
    <>
      <Header title="Calories Tracker" isLogged={false} />
      <FormTitle title="Register" />
      <RegistrationForm handleChange={handleChange} handleSubmit={handleSubmit} state={state} />
    </>
  );
};

export default RegistrationPage;
