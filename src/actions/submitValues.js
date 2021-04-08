import axios from 'axios';
import showAlert from './showAlert';

const submitValues = ({
  uid,
  accessToken,
  expiry,
  client,
  meal,
}) => dispatch => axios.post('https://caloriesapi.herokuapp.com/api/v1/measurements/create', {
  uid,
  'access-token': accessToken,
  client,
  expiry,
  measure: 'carbohydrates',
  value: meal.Carbohydrates,
}).then(response => {
  if (response.status === 200) {
    axios.post('https://caloriesapi.herokuapp.com/api/v1/measurements/create', {
      uid,
      'access-token': accessToken,
      client,
      expiry,
      measure: 'proteins',
      value: meal.Proteins,
    }).then(response => {
      if (response.status === 200) {
        axios.post('https://caloriesapi.herokuapp.com/api/v1/measurements/create', {
          uid,
          'access-token': accessToken,
          client,
          expiry,
          measure: 'fats',
          value: meal.Fats,
        }).then(response => {
          if (response.status === 200) {
            const caloriesValue = (meal.Fats * 9) + (meal.Carbohydrates * 4) + (meal.Proteins * 4);
            axios.post('https://caloriesapi.herokuapp.com/api/v1/measurements/create', {
              uid,
              'access-token': accessToken,
              client,
              expiry,
              measure: 'calories',
              value: caloriesValue,
            }).then(response => {
              dispatch(showAlert(response));
            });
          }
        });
      }
    });
  }
}).catch(err => dispatch(showAlert(err)));

export default submitValues;
