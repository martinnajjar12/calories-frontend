import axios from 'axios';
import { LOGIN } from '../actionTypes/index';
import saveToSessionStorage from '../utils/sessionStorage';

const pureLogin = data => {
  saveToSessionStorage(data, true);
  return ({
    type: LOGIN,
    payload: {
      uid: data.uid,
      accessToken: data['access-token'],
      tokenType: data['token-type'],
      expiry: data.expiry,
      client: data.client,
    },
  });
};

const login = info => dispatch => axios.post('http://localhost:3000/auth/sign_in', info)
  .then(response => {
    dispatch(pureLogin(response.headers));
  });

export default login;
