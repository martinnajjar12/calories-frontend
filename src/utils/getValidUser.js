const getValidUser = () => {
  const uid = sessionStorage.getItem('uid');
  const expiry = sessionStorage.getItem('expiry');
  const accessToken = sessionStorage.getItem('accessToken');
  const client = sessionStorage.getItem('client');
  return {
    uid,
    expiry,
    accessToken,
    client,
  };
};

export default getValidUser;
