import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import {
    alertReducer as alertContainer,
    todoReducer as todoContainer
} from './_reducers';

export const store = createStore(combineReducers({
    alertContainer,
    todoContainer
}), applyMiddleware(thunkMiddleware));