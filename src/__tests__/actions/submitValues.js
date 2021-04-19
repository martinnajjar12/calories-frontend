import moxios from 'moxios';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import submitValues from '../../actions/submitValues';
import { SHOW_ALERT } from '../../actionTypes';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const url = 'https://caloriesapi.herokuapp.com/api/v1/measurements/';
const userInfo = {
  accessToken: 'lfjsdf32er32kl',
  client: 'fljdsf973jlk',
  expiry: '438794323',
  uid: 'martin@microverse.org',
  meal: {
    Carbohydrates: 123,
    Proteins: 25,
    Fats: 35,
  },
};

describe('fetchCaloriesData', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('should return an object when posting successfully', () => {
    moxios.stubOnce('POST', url, {
      status: 200,
      response: [{ name: 'test 1', value: '13' }, { name: 'test 2', value: '23' }],
    });

    const store = mockStore({ name: 'test 1', value: '13' }, { name: 'test 2', value: '23' });

    return store.dispatch(submitValues(userInfo)).then(() => {
      moxios.stubOnce('POST', url, {
        status: 200,
        response: [{ name: 'test 1', value: '13' }, { name: 'test 2', value: '23' }],
      }).then(() => {
        moxios.stubOnce('POST', url, {
          status: 200,
          response: [{ name: 'test 1', value: '13' }, { name: 'test 2', value: '23' }],
        }).then(() => {
          expect(store.getActions()).toEqual({
            type: SHOW_ALERT,
            payload: 'success',
          });
        });
      });
    });
  });
});
