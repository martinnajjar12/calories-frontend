import getValidUser from '../../utils/getValidUser';

sessionStorage.setItem('uid', 'martin@microverse.org');
sessionStorage.setItem('expiry', '12349872');
sessionStorage.setItem('accessToken', 'flsff23kl0fds0');
sessionStorage.setItem('client', 'slf0ds2rklf');

describe('getValidUser function', () => {
  it('should return an object with the values specified above', () => {
    expect(getValidUser()).toEqual({
      uid: 'martin@microverse.org',
      expiry: '12349872',
      accessToken: 'flsff23kl0fds0',
      client: 'slf0ds2rklf',
    });
  });
});
