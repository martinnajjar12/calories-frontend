import { LOGIN } from '../actionTypes/index';
import saveToSessionStorage from '../utils/sessionStorage';

const login = data => {
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

export default login;
