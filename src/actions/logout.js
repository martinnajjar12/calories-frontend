import axios from 'axios';
import { LOGOUT } from '../actionTypes';
import deleteRegistrationSession from './deleteRegistrationSession';

const nullSessionStorage = {
  accessToken: null,
  uid: null,
  expiry: null,
  client: null,
  tokenType: null,
};

const pureLogout = () => ({
  type: LOGOUT,
  payload: nullSessionStorage,
});

const logout = (uid, accessToken, client) => dispatch => axios.delete('http://localhost:3000/auth/sign_out', {
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
