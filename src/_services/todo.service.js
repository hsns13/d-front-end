import { config } from '../_config';
import handleResponse from './helper';

const getTodoList = () => {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };

    return fetch(`${config.apiUrl}/todos`, requestOptions).then(handleResponse);
};

const getTodo = (id) => {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };

    return fetch(`${config.apiUrl}/todo/${id}`, requestOptions).then(handleResponse);
}

const addTodo = (todo) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(todo)
    };

    return fetch(`${config.apiUrl}/todo`, requestOptions).then(handleResponse);
}

const updateTodo = (todo) => {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(todo)
    };

    return fetch(`${config.apiUrl}/todo/${todo.id}`, requestOptions).then(handleResponse);
}

const removeTodo = (id) => {
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    };

    return fetch(`${config.apiUrl}/todo/${id}`, requestOptions).then(handleResponse);
}

const clearCompletedTodo = () => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    };

    return fetch(`${config.apiUrl}/todoClear`, requestOptions).then(handleResponse);
}

export const todoService = {
    getTodoList,
    getTodo,
    addTodo,
    updateTodo,
    removeTodo,
    clearCompletedTodo
};