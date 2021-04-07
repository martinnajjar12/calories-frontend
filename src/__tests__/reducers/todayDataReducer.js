import { FETCH_TODAY_DATA } from '../../actionTypes';
import toadyDataReducer from '../../reducers/todayDataReducer';

const fetchTodayData = {
  type: FETCH_TODAY_DATA,
  payload: [1, 2, 34, 5],
};

describe('todayDataReducer', () => {
  it('returns a new array that was passed through the action', () => {
    expect(toadyDataReducer([], fetchTodayData)).toEqual([1, 2, 34, 5]);
  });
});
