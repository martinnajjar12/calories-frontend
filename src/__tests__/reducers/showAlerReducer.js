import { CLOSE_ALERT, SHOW_ALERT } from '../../actionTypes';
import showAlertReducer from '../../reducers/showAlertReducer';

const showAlert = {
  type: SHOW_ALERT,
  payload: {
    status: 201,
    message: 'test',
  },
};

const showError = {
  type: SHOW_ALERT,
  payload: 401,
};

const closeAlert = {
  type: CLOSE_ALERT,
};

describe('showAlerReducer', () => {
  it('returns an object with bool set to true when the action is showAlert', () => {
    expect(showAlertReducer({}, showAlert)).toEqual({
      bool: true,
      status: 'success',
      message: 'test',
    });
  });

  it("returns an object with bool set to true and status error if the payload of the action isn't 200", () => {
    expect(showAlertReducer({}, showError)).toEqual({
      bool: true,
      status: 'error',
    });
  });

  it('returns an object with bool set to false when the action is closeAlert', () => {
    expect(showAlertReducer({ bool: true, status: 'success' }, closeAlert)).toEqual({
      bool: false,
      status: 'success',
    });
  });
});
