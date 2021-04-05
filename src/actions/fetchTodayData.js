import axios from 'axios';
import { CHANGE_SESSION_DATA, FETCH_TODAY_DATA } from '../actionTypes';
import saveToSessionStorage from '../utils/sessionStorage';

const changeSessionData = data => {
  saveToSessionStorage(data, true);
  return {
    type: CHANGE_SESSION_DATA,
    payload: {
      uid: data.uid,
      accessToken: data['access-token'],
      tokenType: data['token-type'],
      expiry: data.expiry,
      client: data.client,
    },
  };
};

const pureFetchTodayData = data => ({
  type: FETCH_TODAY_DATA,
  payload: data,
});

const fetchTodayData = ({
  accessToken,
  uid,
  client,
  expiry,
}) => dispatch => axios.get('http://localhost:3000/api/v1/measures', {
  headers: {
    'access-token': accessToken,
    uid,
    client,
    expiry,
  },
}).then(response => {
  changeSessionData(response.headers);
  dispatch(pureFetchTodayData(response.data));
});

export default fetchTodayData;
