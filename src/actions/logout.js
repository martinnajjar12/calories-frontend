import { LOGOUT } from '../actionTypes';
import axiosHelper from '../utils/axiosHelper';
import saveToLocalStorage from '../utils/saveToLocalStorage';
import deleteRegistrationSession from './deleteRegistrationSession';

const nullSessionStorage = {
  accessToken: null,
  uid: null,
  expiry: null,
  client: null,
  tokenType: null,
};

const pureLogout = () => {
  saveToLocalStorage(nullSessionStorage, '');
  return {
    type: LOGOUT,
    payload: nullSessionStorage,
  };
};

const logout = (uid, accessToken, client) => dispatch => axiosHelper('delete', '/auth/sign_out', {
  headers: {
    uid,
    client,
    'access-token': accessToken,
  },
})
  .then(() => {
    dispatch(pureLogout());
    dispatch(deleteRegistrationSession());
  });

export default logout;
