import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducer.js';

export default function initializeStore() {
    const store = createStore(
        reducer,
        applyMiddleware(logger)
    );
    return store;
}