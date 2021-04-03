import { FETCH_CALORIES_DATA } from '../actionTypes';

const initialState = [];

const chartDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CALORIES_DATA:
      return [...action.payload];

    default:
      return state;
  }
};

export default chartDataReducer;
