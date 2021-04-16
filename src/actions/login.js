import { LOGIN } from '../actionTypes/index';
import axiosHelper from '../utils/axiosHelper';
import showAlert from './showAlert';

const pureLogin = data => ({
  type: LOGIN,
  payload: {
    uid: data.uid,
    accessToken: data['access-token'],
    tokenType: data['token-type'],
    expiry: data.expiry,
    client: data.client,
  },
});

const login = info => dispatch => axiosHelper('post', '/auth/sign_in', info)
  .then(response => dispatch(pureLogin(response.headers)))
  .catch(() => dispatch(showAlert({ status: 401, message: 'Invalid Email or Password' })));

export default login;
