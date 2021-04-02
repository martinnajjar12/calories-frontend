const saveToSessionStorage = (data, isLogged) => {
  console.log(data['access-token']);
  sessionStorage.setItem('accessToken', data['access-token']);
  sessionStorage.setItem('tokentType', data['token-type']);
  sessionStorage.setItem('client', data.client);
  sessionStorage.setItem('uid', data.uid);
  sessionStorage.setItem('expiry', data.expiry);
  sessionStorage.setItem('isLogged', isLogged);
};

export default saveToSessionStorage;
