import { REGISTER } from '../actionTypes';
import axiosHelper from '../utils/axiosHelper';
import saveToLocalStorage from '../utils/saveToLocalStorage';

const pureRegister = data => {
  saveToLocalStorage(data, true);
  return {
    type: REGISTER,
    payload: {
      uid: data.uid,
      accessToken: data['access-token'],
      tokenType: data['token-type'],
      expiry: data.expiry,
      client: data.client,
    },
  };
};

const register = info => dispatch => axiosHelper('post', '/auth', info)
  .then(response => dispatch(pureRegister(response.headers)));

export default register;
