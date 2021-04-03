import { combineReducers } from 'redux';
import registrationReducer from './registrationReducer';
import sessionReducer from './sessionReducer';
import chartDataReducer from './chartDataReducer';

const rootReducer = combineReducers({
  sessionState: sessionReducer,
  registrationState: registrationReducer,
  chartDataState: chartDataReducer,
});

export default rootReducer;
