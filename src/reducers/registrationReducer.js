import { REGISTER } from '../actionTypes';

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

    default:
      return state;
  }
};

export default registrationReducer;
