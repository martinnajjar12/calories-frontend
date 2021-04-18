import moxios from 'moxios';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import login from '../../actions/login';
import { LOGIN } from '../../actionTypes';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const url = 'https://caloriesapi.herokuapp.com/auth/sign_in';
const userInfo = {
  email: 'martin@microverse.org',
  password: '123456',
};

describe('fetchTodayData action', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('should return an object when login successfully', () => {
    moxios.stubOnce('POST', url, {
      status: 200,
      headers: {
        'access-token': 'fskl24klrw',
        'token-type': 'Bearer',
        client: 'flkuf22khf9',
        expiry: '234838943',
        uid: 'martin@microverse.org',
      },
    });

    const store = mockStore({});

    return store.dispatch(login(userInfo)).then(() => {
      expect(store.getActions()).toEqual([{
        type: LOGIN,
        payload: {
          accessToken: 'fskl24klrw',
          tokenType: 'Bearer',
          client: 'flkuf22khf9',
          expiry: '234838943',
          uid: 'martin@microverse.org',
        },
      }]);
    });
  });
});
