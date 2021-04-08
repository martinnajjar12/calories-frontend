import axios from 'axios';
import { REGISTER } from '../actionTypes';

const pureRegister = data => ({
  type: REGISTER,
  payload: {
    uid: data.uid,
    accessToken: data['access-token'],
    tokenType: data['token-type'],
    expiry: data.expiry,
    client: data.client,
  },
});

const register = info => dispatch => axios.post('http://localhost:3000/auth', info)
  .then(response => dispatch(pureRegister(response.headers)));

export default register;
