import {
  CHANGE_SESSION_DATA,
  LOGIN,
  LOGOUT,
  SUBMIT_VALUES,
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

const submitValues = {
  type: SUBMIT_VALUES,
  payload: {
    accessToken: 'dsfj23kjklwr',
    expiry: '13483487',
    client: 'skldfsdfsf234',
  },
};

const changeData = {
  type: CHANGE_SESSION_DATA,
  payload: {
    accessToken: 'dsfj23kjklwr',
    expiry: '13483487',
    client: 'skldfsdfsf234',
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

  it('changes the data when the user submits values', () => {
    expect(sessionReducer({ isLogged: true }, submitValues)).toEqual({
      accessToken: 'dsfj23kjklwr',
      expiry: '13483487',
      client: 'skldfsdfsf234',
      isLogged: true,
    });
  });

  it('changes the data when required with the changeData action', () => {
    expect(sessionReducer({ isLogged: true }, changeData)).toEqual({
      accessToken: 'dsfj23kjklwr',
      expiry: '13483487',
      client: 'skldfsdfsf234',
      isLogged: true,
    });
  });
});
