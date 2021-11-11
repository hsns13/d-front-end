import { config } from '../_config';
import handleResponse from './helper';

const getTodoList = () => {
    const result = fetch(config.apiUrl).then(handleResponse);

    return [
        'todo item 1',
        'todo item 2'
    ];
}

const setTodo = (todo) => {
    return todo;
}

export const todoService = {
    getTodoList,
    setTodo
};