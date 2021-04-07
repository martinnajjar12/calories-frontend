const saveToSessionStorage = (data, isLogged) => {
  sessionStorage.setItem('accessToken', data['access-token']);
  sessionStorage.setItem('tokenType', data['token-type']);
  sessionStorage.setItem('client', data.client);
  sessionStorage.setItem('uid', data.uid);
  sessionStorage.setItem('expiry', data.expiry);
  sessionStorage.setItem('isLogged', isLogged);
};

export default saveToSessionStorage;
