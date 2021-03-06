import axiosHelper from '../utils/axiosHelper';
import showAlert from './showAlert';

const submitValues = ({
  uid,
  accessToken,
  expiry,
  client,
  meal,
}) => dispatch => axiosHelper('post', '/api/v1/measurements/', {
  uid,
  'access-token': accessToken,
  client,
  expiry,
  measure: 'carbohydrates',
  value: meal.Carbohydrates,
}).then(response => {
  if (response.status === 201) {
    axiosHelper('post', '/api/v1/measurements/', {
      uid,
      'access-token': accessToken,
      client,
      expiry,
      measure: 'proteins',
      value: meal.Proteins,
    }).then(response => {
      if (response.status === 201) {
        axiosHelper('post', '/api/v1/measurements/', {
          uid,
          'access-token': accessToken,
          client,
          expiry,
          measure: 'fats',
          value: meal.Fats,
        }).then(response => {
          if (response.status === 201) {
            const caloriesValue = (meal.Fats * 9) + (meal.Carbohydrates * 4) + (meal.Proteins * 4);
            axiosHelper('post', '/api/v1/measurements/', {
              uid,
              'access-token': accessToken,
              client,
              expiry,
              measure: 'calories',
              value: caloriesValue,
            }).then(response => dispatch(showAlert({ ...response, message: 'Meal is submitted successfully!' })));
          }
        });
      }
    });
  }
}).catch(err => dispatch(showAlert({ ...err, message: 'Something went wrong! Please try again later' })));

export default submitValues;
