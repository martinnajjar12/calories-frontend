import axios from 'axios';
import { FETCH_CALORIES_DATA } from '../actionTypes';
import changeSessionData from './changeSessionData';

const pureFetchCaloriesData = data => ({
  type: FETCH_CALORIES_DATA,
  payload: data,
});

const fetchCaloriesData = ({
  accessToken,
  uid,
  expiry,
  client,
}) => dispatch => axios.get('http://localhost:3000/api/v1/calories', {
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
  dispatch(pureFetchCaloriesData(response.data));
});

export default fetchCaloriesData;
