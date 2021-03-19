import { LOGIN, LOGOUT } from '../actionTypes';

const sessionReducer = (state = { isLogged: false }, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLogged: true,
      };
    case LOGOUT:
      return {
        ...state,
        isLogged: false,
      };
    default:
      return state;
  }
};

export default sessionReducer;
