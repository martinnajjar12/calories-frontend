import saveToLocalStorage from '../../utils/saveToLocalStorage';

describe('saveToLocalStorage function', () => {
  const data = {
    uid: 'john@example.com',
    client: '2dsfi34hw7',
    expiry: '2342321',
    'access-token': 'ldjf8423fj',
    'token-type': 'Bearer',
  };

  it('should save the data provided to it to the local storage', () => {
    saveToLocalStorage(data, true);
    expect(localStorage.getItem('accessToken')).toBe('ldjf8423fj');
    expect(localStorage.getItem('expiry')).toBe('2342321');
    expect(localStorage.getItem('isLogged')).toBe('true');
  });
});
