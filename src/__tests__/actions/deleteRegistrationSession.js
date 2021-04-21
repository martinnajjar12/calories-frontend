import deleteRegistrationSession from '../../actions/deleteRegistrationSession';
import { DELETE_REGISTRATION_SESSION } from '../../actionTypes';

const nullRegistrationStorage = {
  accessToken: null,
  uid: null,
  expiry: null,
  client: null,
  tokenType: null,
};

describe('deleteRegistrationSession action', () => {
  it('returns an object with the type and payload keys', () => {
    expect(deleteRegistrationSession()).toEqual({
      type: DELETE_REGISTRATION_SESSION,
      payload: nullRegistrationStorage,
    });
  });

  it('clear out the session storage', () => {
    expect(sessionStorage.getItem('uid')).toEqual(null);
  });
});
