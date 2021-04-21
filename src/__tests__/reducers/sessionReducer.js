import {
  LOGIN,
  LOGOUT,
} from '../../actionTypes';
import sessionReducer from '../../reducers/sessionReducer';

const login = {
  type: LOGIN,
  payload: {
    accessToken: 'sflkl2324',
    expiry: '2348734',
    client: 'dfsf897fsr2k',
  },
};

const logout = {
  type: LOGOUT,
  payload: {
    accessToken: '',
    expiry: '',
    client: '',
  },
};

describe('sessionReducer', () => {
  it('returns a new object with the payload of the action and isLogged set to true when the action is login', () => {
    expect(sessionReducer({}, login)).toEqual({
      accessToken: 'sflkl2324',
      expiry: '2348734',
      client: 'dfsf897fsr2k',
      isLogged: true,
    });
  });

  it('returns a new object with the payload of the action and isLogged set to false when the action is logout', () => {
    expect(sessionReducer({}, logout)).toEqual({
      accessToken: '',
      expiry: '',
      client: '',
      isLogged: false,
    });
  });
});
