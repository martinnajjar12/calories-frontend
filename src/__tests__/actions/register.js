import moxios from 'moxios';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import register from '../../actions/register';
import { REGISTER } from '../../actionTypes';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const url = 'https://caloriesapi.herokuapp.com/auth';
const userInfo = {
  email: 'martin@microverse.org',
  password: '123456',
  age: 25,
  activity: 'sedentary',
  weight: 80,
  height: 178,
  name: 'Martin',
  gender: 'male',
};

describe('fetchTodayData action', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('should return an object when register successfully', () => {
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

    return store.dispatch(register(userInfo)).then(() => {
      expect(store.getActions()).toEqual([{
        type: REGISTER,
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
