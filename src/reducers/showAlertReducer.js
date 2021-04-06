import { SHOW_ALERT, CLOSE_ALERT } from '../actionTypes';

const initialState = {
  bool: false,
  status: 'success',
};

const showAlertReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return {
        bool: true,
        status: action.payload === 200 ? 'success' : 'error',
      };
    case CLOSE_ALERT:
      return {
        bool: false,
        status: 'success',
      };

    default:
      return state;
  }
};

export default showAlertReducer;
