import { combineReducers } from 'redux';
import sessionReducer from './sessionReducer';

const rootReducer = combineReducers({ sessionReducer });

export default rootReducer;
