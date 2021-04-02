import { combineReducers } from 'redux';
import registrationReducer from './registrationReducer';
import sessionReducer from './sessionReducer';
import submitValuesReducer from './submitValuesReducer';

const rootReducer = combineReducers({
  sessionState: sessionReducer,
  registrationState: registrationReducer,
  submitValuesState: submitValuesReducer,
});

export default rootReducer;
