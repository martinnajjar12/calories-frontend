import axios from 'axios';
import { SUBMIT_VALUES } from '../actionTypes';
import saveToSessionStorage from '../utils/sessionStorage';
import showAlert from './showAlert';

const pureSubmitValues = data => {
  saveToSessionStorage(data, true);
  return ({
    type: SUBMIT_VALUES,
    payload: {
      uid: data.uid,
      accessToken: data['access-token'],
      tokenType: data['token-type'],
      expiry: data.expiry,
      client: data.client,
    },
  });
};

const submitValues = ({
  uid,
  accessToken,
  expiry,
  client,
  meal,
}) => dispatch => axios.post('http://localhost:3000/api/v1/measurements/create', {
  uid,
  'access-token': accessToken,
  client,
  expiry,
  measure: 'carbohydrates',
  value: meal.Carbohydrates,
}).then(response => {
  if (response.status === 200) {
    const firstResponse = response;
    axios.post('http://localhost:3000/api/v1/measurements/create', {
      uid,
      'access-token': accessToken,
      client,
      expiry,
      measure: 'proteins',
      value: meal.Proteins,
    }).then(response => {
      if (response.status === 200) {
        axios.post('http://localhost:3000/api/v1/measurements/create', {
          uid,
          'access-token': accessToken,
          client,
          expiry,
          measure: 'fats',
          value: meal.Fats,
        }).then(response => {
          if (response.status === 200) {
            const caloriesValue = (meal.Fats * 9) + (meal.Carbohydrates * 4) + (meal.Proteins * 4);
            axios.post('http://localhost:3000/api/v1/measurements/create', {
              uid,
              'access-token': accessToken,
              client,
              expiry,
              measure: 'calories',
              value: caloriesValue,
            }).then(response => {
              if (response.status === 200) {
                dispatch(pureSubmitValues(firstResponse.headers));
                dispatch(showAlert(response));
              }
            });
          }
        });
      }
    });
  }
}).catch(err => dispatch(showAlert(err)));

export default submitValues;
