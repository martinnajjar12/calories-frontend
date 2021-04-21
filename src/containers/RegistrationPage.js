import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import FormTitle from '../components/FormTitle';
import RegistrationForm from '../components/RegistrationForm';
import Header from '../components/Header';
import register from '../actions/register';
import validValues from '../utils/validValues';
import showAlert from '../actions/showAlert';
import CustomAlert from '../components/CustomAlert';

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
    if (validValues(state)) {
      dispatch(register(info));
    } else {
      dispatch(showAlert({ status: 422, message: 'Please fill in all the fields' }));
    }
  };

  return (
    <>
      <Header title="Calories Tracker" isLogged={false} />
      <FormTitle title="Register" />
      <RegistrationForm handleChange={handleChange} handleSubmit={handleSubmit} state={state} />
      <CustomAlert />
    </>
  );
};

export default RegistrationPage;
