import { SHOW_ALERT } from '../actionTypes';

const showAlert = data => ({
  type: SHOW_ALERT,
  payload: data.status,
});

export default showAlert;
