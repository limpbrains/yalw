import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

import errorMiddleware from './error-middleware';

const store = createStore(rootReducer, applyMiddleware(errorMiddleware, thunk));

export default store;
