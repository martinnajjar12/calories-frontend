import { SHOW_ALERT } from '../actionTypes';

const showAlert = ({ status, message }) => ({
  type: SHOW_ALERT,
  payload: { status, message },
});

export default showAlert;
