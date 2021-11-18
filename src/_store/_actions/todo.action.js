import { todoConstant } from '../_constants';
import { alertActions } from './alert.action';
import { todoService } from '../../_services';

/** primary */
const add = (todoItem) => {
    return {
        type: todoConstant.ADD,
        todoItem
    }
}

const update = (todoItem) => {
    return {
        type: todoConstant.UPDATE,
        todoItem
    }
}

const remove = (id) => {
    return {
        type: todoConstant.REMOVE,
        id
    }
}

/** secondary */
const all = (todoListAll = null) => {
    return {
        type: todoConstant.ALL,
        todoListAll
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
const startGetAll = () => {
    return (dispatch, getState) => {
        todoService.getTodoList()
            .then(todoList => {
                dispatch(all(todoList));
            }).catch(error => {
                dispatch(alertActions.error(error.toString()));
            })
    }
}

const startAdd = (todoItem) => {
    return (dispatch, getState) => {
        todoService.addTodo(todoItem)
            .then(data => {
                if (data.code === 201) {
                    todoItem.id = data.todo.id;
                    dispatch(add(todoItem));
                }  
            }).catch(error => {
                dispatch(alertActions.error(error.toString()));
            });
    }
}

const startUpdate = (todo) => {
    return (dispatch, getState) => {
        todoService.updateTodo(todo)
            .then(data => {
                if (data.code === 202)
                    dispatch(update(todo));
                else {
                    dispatch(startGetAll());
                }
            }).catch(error => {
                dispatch(alertActions.error(error.toString()));
            });
    }
}

const startRemove = (id) => {
    return (dispatch, getState) => {
        todoService.removeTodo(id)
            .then(data => {
                if (data.code === 200)
                    dispatch(remove(id));
            }).catch(error => {
                dispatch(alertActions.error(error.toString()));
            });
    }
}

const startClearCompleted = () => {
    return (dispatch, getState) => {
        // do network call
        todoService.clearCompletedTodo()
            .then(data => {
                if (data.code === 200)
                    dispatch(clearCompleted());
            }).catch(error => {
                dispatch(alertActions.error(error.toString()));
            });
    }
}

export const todoActions = {
    add,
    update,
    remove,
    all,
    active,
    completed,
    clearCompleted,
    startGetAll,
    startAdd,
    startUpdate,
    startRemove,
    startClearCompleted
}