import axios from 'axios';
import { FETCH_TODAY_DATA } from '../actionTypes';
import changeSessionData from './changeSessionData';

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
  if (response.headers['access-token'] !== '') {
    changeSessionData(response.headers);
  }
  dispatch(pureFetchTodayData(response.data));
});

export default fetchTodayData;
