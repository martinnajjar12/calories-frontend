import showAlert from '../../actions/showAlert';
import { SHOW_ALERT } from '../../actionTypes';

describe('show Alert action', () => {
  it('should return an object when show alert is called', () => {
    expect(showAlert({ status: 'success' })).toEqual({
      type: SHOW_ALERT,
      payload: 'success',
    });
  });
});
