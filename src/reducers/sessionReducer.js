import {
  LOGIN,
  LOGOUT,
} from '../actionTypes';

const initialState = {
  accessToken: localStorage.getItem('accessToken'),
  expiry: localStorage.getItem('expiry'),
  client: localStorage.getItem('client'),
  tokenType: localStorage.getItem('tokenType'),
  uid: localStorage.getItem('uid'),
  isLogged: !!localStorage.getItem('isLogged'),
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
    default:
      return state;
  }
};

export default sessionReducer;
