import { SHOW_ALERT, CLOSE_ALERT } from '../actionTypes';

const initialState = {
  bool: false,
  status: 'success',
  message: 'No Error',
};

const showAlertReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOW_ALERT:
      return {
        bool: true,
        status: payload.status === 201 ? 'success' : 'error',
        message: payload.message,
      };
    case CLOSE_ALERT:
      return {
        ...state,
        bool: false,
      };

    default:
      return state;
  }
};

export default showAlertReducer;
