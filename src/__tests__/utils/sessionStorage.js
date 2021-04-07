import saveToSessionStorage from '../../utils/sessionStorage';

const testData = {
  'access-token': 'sdfaks284nmds',
  client: 'dffdf79824',
  expiry: '3248743',
  'token-type': 'Bearer',
  uid: 'martin@microverse.org',
};

describe('sessionStorage function', () => {
  it('should save the data passed to it to the sessionStorage', () => {
    saveToSessionStorage(testData, true);
    const retrievedData = {
      uid: sessionStorage.getItem('uid'),
      client: sessionStorage.getItem('client'),
      expiry: sessionStorage.getItem('expiry'),
      accessToken: sessionStorage.getItem('accessToken'),
      tokenType: sessionStorage.getItem('tokenType'),
    };
    expect(retrievedData).toEqual({
      accessToken: 'sdfaks284nmds',
      client: 'dffdf79824',
      expiry: '3248743',
      tokenType: 'Bearer',
      uid: 'martin@microverse.org',
    });
  });
});
