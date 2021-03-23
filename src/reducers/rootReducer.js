import { combineReducers } from 'redux';
import registrationReducer from './registrationReducer';
import sessionReducer from './sessionReducer';

const rootReducer = combineReducers({
  sessionState: sessionReducer,
  registrationState: registrationReducer,
});

export default rootReducer;
