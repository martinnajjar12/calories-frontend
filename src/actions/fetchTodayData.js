import { FETCH_TODAY_DATA } from '../actionTypes';
import axiosHelper from '../utils/axiosHelper';

const pureFetchTodayData = data => ({
  type: FETCH_TODAY_DATA,
  payload: data,
});

const fetchTodayData = ({
  accessToken,
  uid,
  client,
  expiry,
}) => dispatch => axiosHelper('get', '/api/v1/measures', {
  headers: {
    'access-token': accessToken,
    uid,
    client,
    expiry,
  },
}).then(response => dispatch(pureFetchTodayData(response.data)));

export default fetchTodayData;
