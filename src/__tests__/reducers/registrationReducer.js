import { DELETE_REGISTRATION_SESSION, REGISTER } from '../../actionTypes';
import registrationReducer from '../../reducers/registrationReducer';

const registerAction = {
  type: REGISTER,
  payload: {
    accessToken: '13kidf234',
    expiry: 10348573,
    client: 'sdfkscx28732',
  },
};

const deleteRegistrationSession = {
  type: DELETE_REGISTRATION_SESSION,
  payload: {
    accessToken: '',
    client: '',
  },
};

describe('registrationReducer', () => {
  it('returns a new object when the action is REGISTER', () => {
    expect(registrationReducer({}, registerAction)).toEqual({
      accessToken: '13kidf234',
      expiry: 10348573,
      client: 'sdfkscx28732',
      isRegisteredAndLogged: true,
    });
  });

  it('returns a new object with isLogged is false', () => {
    expect(registrationReducer({}, deleteRegistrationSession)).toEqual({
      accessToken: '',
      client: '',
      isRegisteredAndLogged: false,
    });
  });
});
