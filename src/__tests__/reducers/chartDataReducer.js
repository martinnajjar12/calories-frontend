import chartDataReducer from '../../reducers/chartDataReducer';
import { FETCH_CALORIES_DATA } from '../../actionTypes';

const action = {
  type: FETCH_CALORIES_DATA,
  payload: [125, 50, 25, 1000],
};

describe('chardDataRedcuer', () => {
  it('returns the array that was passed through the action', () => {
    expect(chartDataReducer([], action)).toEqual([125, 50, 25, 1000]);
  });
});
