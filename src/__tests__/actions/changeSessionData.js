import changeSessionData from '../../actions/changeSessionData';
import { CHANGE_SESSION_DATA } from '../../actionTypes';

const testData = {
  expiry: '123487',
  'access-token': 'dkfs98792',
  client: '248kjdf5',
  uid: 'martin@microverse.org',
  'token-type': 'Bearer',
};

describe('changeSessionData action', () => {
  it('should return an object with the type and payload keys', () => {
    expect(changeSessionData(testData)).toEqual({
      type: CHANGE_SESSION_DATA,
      payload: {
        expiry: '123487',
        accessToken: 'dkfs98792',
        client: '248kjdf5',
        uid: 'martin@microverse.org',
        tokenType: 'Bearer',
      },
    });
  });
});
