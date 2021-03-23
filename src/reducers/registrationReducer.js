import { DELETE_REGISTRATION_SESSION, REGISTER } from '../actionTypes';

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
  isRegisteredAndLogged: false,
};

const registrationReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case REGISTER:
      return {
        ...state,
        ...payload,
        isRegisteredAndLogged: true,
      };
    case DELETE_REGISTRATION_SESSION:
      return {
        ...state,
        ...payload,
        isRegisteredAndLogged: false,
      };

    default:
      return state;
  }
};

export default registrationReducer;
