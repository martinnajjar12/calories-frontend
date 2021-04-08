import axios from 'axios';
import { FETCH_CALORIES_DATA } from '../actionTypes';

const pureFetchCaloriesData = data => ({
  type: FETCH_CALORIES_DATA,
  payload: data,
});

const fetchCaloriesData = ({
  accessToken,
  uid,
  expiry,
  client,
}) => dispatch => axios.get('https://caloriesapi.herokuapp.com/api/v1/calories', {
  headers: {
    'access-token': accessToken,
    uid,
    client,
    expiry,
  },
}).then(response => dispatch(pureFetchCaloriesData(response.data)));

export default fetchCaloriesData;
