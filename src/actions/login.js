import { LOGIN } from '../actionTypes/index';

const login = data => ({
  type: LOGIN,
  payload: data,
});

export default login;
