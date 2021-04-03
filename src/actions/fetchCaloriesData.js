import axios from 'axios';
import { FETCH_CALORIES_DATA } from '../actionTypes';
import saveToSessionStorage from '../utils/sessionStorage';

const pureFetchCaloriesData = data => {
  saveToSessionStorage(data, true);
  return ({
    type: FETCH_CALORIES_DATA,
    payload: {
      uid: data.uid,
      accessToken: data['access-token'],
      tokenType: data['token-type'],
      expiry: data.expiry,
      client: data.client,
    },
  });
};

const fetchCaloriesData = ({
  accessToken,
  uid,
  expiry,
  client,
}) => dispatch => {
  console.log(accessToken);
  axios.get('http://localhost:3000/api/v1/calories', {
    headers: {
      'access-token': accessToken,
      uid,
      client,
      expiry,
    },
  }).then(response => {
    console.log(response);
    dispatch(pureFetchCaloriesData(response.headers));
  });
};

export default fetchCaloriesData;
