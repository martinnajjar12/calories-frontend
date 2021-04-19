import { DELETE_REGISTRATION_SESSION } from '../actionTypes';
import saveToLocalStorage from '../utils/saveToLocalStorage';

const nullRegistrationStorage = {
  accessToken: null,
  uid: null,
  expiry: null,
  client: null,
  tokenType: null,
};

const deleteRegistrationSession = () => {
  saveToLocalStorage(nullRegistrationStorage, '');
  return {
    type: DELETE_REGISTRATION_SESSION,
    payload: nullRegistrationStorage,
  };
};

export default deleteRegistrationSession;
