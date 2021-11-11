import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import {
    appReducer as appContainer,
    alertReducer as alertContainer,
    todoReducer as todoContainer
} from './_reducers';

export const store = createStore(combineReducers({
    appContainer,
    alertContainer,
    todoContainer
}), applyMiddleware(thunkMiddleware));