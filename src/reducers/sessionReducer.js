import {
  LOGIN,
  LOGOUT,
  SUBMIT_VALUES,
} from '../actionTypes';

const initialState = {
  accessToken: sessionStorage.getItem('accessToken'),
  expiry: sessionStorage.getItem('expiry'),
  client: sessionStorage.getItem('client'),
  tokenType: sessionStorage.getItem('token-type'),
  uid: sessionStorage.getItem('uid'),
  isLogged: !!sessionStorage.getItem('isLogged'),
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        ...action.payload,
        isLogged: true,
      };
    case LOGOUT:
      return {
        ...state,
        ...action.payload,
        isLogged: false,
      };
    case SUBMIT_VALUES:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default sessionReducer;
