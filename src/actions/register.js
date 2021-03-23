import axios from 'axios';
import { REGISTER } from '../actionTypes';
import saveToSessionStorage from '../utils/sessionStorage';

const pureRegister = data => {
  saveToSessionStorage(data, true);
  return ({
    type: REGISTER,
    payload: {
      uid: data.uid,
      accessToken: data['access-token'],
      tokenType: data['token-type'],
      expiry: data.expiry,
      client: data.client,
    },
  });
};

const register = info => dispatch => axios.post('http://localhost:3000/auth', info)
  .then(response => {
    if (response.status === 200) {
      dispatch(pureRegister(response.headers));
    }
  });

export default register;
