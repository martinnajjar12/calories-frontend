import { FETCH_TODAY_DATA } from '../actionTypes';

const initialState = [];

const toadyDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODAY_DATA:
      return [
        ...action.payload,
      ];

    default:
      return state;
  }
};

export default toadyDataReducer;
