import { combineReducers } from 'redux';
import registrationReducer from './registrationReducer';
import sessionReducer from './sessionReducer';
import chartDataReducer from './chartDataReducer';
import toadyDataReducer from './todayDataReducer';

const rootReducer = combineReducers({
  sessionState: sessionReducer,
  registrationState: registrationReducer,
  chartDataState: chartDataReducer,
  todayDataState: toadyDataReducer,
});

export default rootReducer;
