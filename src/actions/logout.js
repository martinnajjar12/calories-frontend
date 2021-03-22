import { LOGOUT } from '../actionTypes';

const nullSessionStorage = {
  accessToken: null,
  uid: null,
  expiry: null,
  client: null,
  tokenType: null,
};

const logout = () => {
  sessionStorage.clear();
  return ({
    type: LOGOUT,
    payload: nullSessionStorage,
  });
};

export default logout;
