import { applyMiddleware, combineReducers, createStore } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { SDK_REDUCERS } from './index';

const middleware = applyMiddleware(promise(), thunk, logger);

export default createStore(combineReducers(SDK_REDUCERS), middleware);
