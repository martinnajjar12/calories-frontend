import moxios from 'moxios';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchCaloriesData from '../../actions/fetchCaloriesData';
import { FETCH_CALORIES_DATA } from '../../actionTypes';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const url = 'http://localhost:3000/api/v1/calories';
const userInfo = {
  accessToken: 'lfjsdf32er32kl',
  client: 'fljdsf973jlk',
  expiry: '438794323',
  uid: 'martin@microverse.org',
};

describe('fetchCaloriesData', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('should return an object when fetching successfully', () => {
    moxios.stubOnce('GET', url, {
      status: 200,
      response: [{ name: 'test 1', value: '13' }, { name: 'test 2', value: '23' }],
    });

    const store = mockStore({ name: 'test 1', value: '13' }, { name: 'test 2', value: '23' });

    return store.dispatch(fetchCaloriesData(userInfo)).then(() => {
      expect(store.getActions()).toEqual([{
        type: FETCH_CALORIES_DATA,
        payload: [{ name: 'test 1', value: '13' }, { name: 'test 2', value: '23' }],
      }]);
    });
  });
});
