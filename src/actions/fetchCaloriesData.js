import { FETCH_CALORIES_DATA } from '../actionTypes';
import axiosHelper from '../utils/axiosHelper';

const pureFetchCaloriesData = data => ({
  type: FETCH_CALORIES_DATA,
  payload: data,
});

const fetchCaloriesData = ({
  accessToken,
  uid,
  expiry,
  client,
}) => dispatch => axiosHelper('get', '/api/v1/measures/1', {
  headers: {
    'access-token': accessToken,
    uid,
    client,
    expiry,
  },
}).then(response => dispatch(pureFetchCaloriesData(response.data)));

export default fetchCaloriesData;
