const saveToLocalStorage = (data, isLogged) => {
  localStorage.setItem('accessToken', data['access-token']);
  localStorage.setItem('expiry', data.expiry);
  localStorage.setItem('client', data.client);
  localStorage.setItem('uid', data.uid);
  localStorage.setItem('tokenType', data['token-type']);
  localStorage.setItem('isLogged', isLogged);
};

export default saveToLocalStorage;
