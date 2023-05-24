import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {reducers} from './reducer';

interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
}

const composeEnhancer = compose;

const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)));

export default store;
