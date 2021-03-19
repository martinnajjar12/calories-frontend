import { createReduxStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const store = createReduxStore(rootReducer, applyMiddleware(thunk));

export default store;
