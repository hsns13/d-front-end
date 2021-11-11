import { todoConstant } from '../_constants';

/** primary */
const add = (todoItem) => {
    return {
        type: todoConstant.ADD,
        todoItem
    }
}

const update = (id) => {
    return {
        type: todoConstant.UPDATE,
        id
    }
}

const remove = (id) => {
    return {
        type: todoConstant.REMOVE,
        id
    }
}

/** secondary */
const all = (todoList = null) => {
    return {
        type: todoConstant.ALL,
        todoList
    }
};

const active = () => {
    return {
        type: todoConstant.ACTIVE
    }
};

const completed = () => {
    return {
        type: todoConstant.COMPLETED
    }
};

const clearCompleted = () => {
    return {
        type: todoConstant.CLEAR_COMPLETED
    }
};

/** network calls */
const startAdd = (todoItem) => {
    return (dispatch, getState) => {
        // do network call
        dispatch(add(todoItem));
    }
}

const startUpdate = (id) => {
    return (dispatch, getState) => {
        // do network call
        dispatch(update(id));
    }
}

const startRemove = (id) => {
    return (dispatch, getState) => {
        // do network call
        dispatch(remove(id));
    }
}

const startGetAll = () => {
    return (dispatch, getState) => {
        // do network call
        dispatch(all([]));
    }
}

const startClearCompleted = () => {
    return (dispatch, getState) => {
        // do network call
        dispatch(clearCompleted());
    }
}

export const todoActions = {
    startAdd,
    startUpdate,
    startRemove,
    startGetAll,
    all,
    active,
    completed,
    startClearCompleted
}