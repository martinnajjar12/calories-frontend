import { DELETE_REGISTRATION_SESSION } from '../actionTypes';

const nullRegistrationStorage = {
  accessToken: null,
  uid: null,
  expiry: null,
  client: null,
  tokenType: null,
};

const deleteRegistrationSession = () => {
  sessionStorage.clear();
  return {
    type: DELETE_REGISTRATION_SESSION,
    payload: nullRegistrationStorage,
  };
};

export default deleteRegistrationSession;