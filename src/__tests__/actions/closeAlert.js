import closeAlert from '../../actions/closeAlert';
import { CLOSE_ALERT } from '../../actionTypes';

describe('closeAlert action', () => {
  it('returns and object with the type closeAlert', () => {
    expect(closeAlert()).toEqual({
      type: CLOSE_ALERT,
    });
  });
});
