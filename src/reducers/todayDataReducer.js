import { CHANGE_SESSION_DATA } from '../actionTypes';

const initialState = [];

const toadyDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SESSION_DATA:
      return [
        ...state,
        ...action.payload,
      ];

    default:
      return state;
  }
};

export default toadyDataReducer;
