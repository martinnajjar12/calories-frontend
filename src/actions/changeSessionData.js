import { CHANGE_SESSION_DATA } from '../actionTypes';
import saveToSessionStorage from '../utils/sessionStorage';

const changeSessionData = data => {
  saveToSessionStorage(data, true);
  return {
    type: CHANGE_SESSION_DATA,
    payload: {
      uid: data.uid,
      accessToken: data['access-token'],
      tokenType: data['token-type'],
      expiry: data.expiry,
      client: data.client,
    },
  };
};

export default changeSessionData;
