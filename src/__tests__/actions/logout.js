import moxios from 'moxios';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import logout from '../../actions/logout';
import { DELETE_REGISTRATION_SESSION, LOGOUT } from '../../actionTypes';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const url = 'https://caloriesapi.herokuapp.com/auth/sign_out';
const userInfo = {
  'access-token': 'fskl24klrw',
  'token-type': 'Bearer',
  client: 'flkuf22khf9',
  expiry: '234838943',
  uid: 'martin@microverse.org',
};

describe('logout action', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('should return an object when logout successfully', () => {
    moxios.stubOnce('DELETE', url, {
      status: 200,
    });

    const store = mockStore({
      'access-token': 'fskl24klrw',
      'token-type': 'Bearer',
      client: 'flkuf22khf9',
      expiry: '234838943',
      uid: 'martin@microverse.org',
    });

    return store.dispatch(logout(userInfo)).then(() => {
      expect(store.getActions()).toEqual([{
        type: LOGOUT,
        payload: {
          accessToken: null,
          uid: null,
          expiry: null,
          client: null,
          tokenType: null,
        },
      },
      {
        type: DELETE_REGISTRATION_SESSION,
        payload: {
          accessToken: null,
          uid: null,
          expiry: null,
          client: null,
          tokenType: null,
        },
      }]);
    });
  });
});
