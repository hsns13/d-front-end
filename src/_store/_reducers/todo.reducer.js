import { todoConstant } from '../_constants';

const defaultState = {
    completedItems: 0,
    totalItemsCount: 0,
    todoList: [],
    all: []
};

export const todoReducer = (state = defaultState, action) => {
    switch (action.type) {
        case todoConstant.ADD:
            state.all.push(action.todoItem);

            return {
                ...state,
                totalItemsCount: state.all.length,
                todoList: [...state.all]
            }
        case todoConstant.UPDATE:
            const index = state.all.findIndex(f => f.id === action.id);

            const updatingItem = state.all.find(f => f.id === action.id);
            updatingItem.isActive = updatingItem.isActive ? 0 : 1;

            state.all[index] = updatingItem;

            return {
                ...state,
                completedItems: state.all.filter(f => f.isActive === 0).length,
                todoList: [...state.all],
            }
        case todoConstant.REMOVE:
            state.all = state.all.filter(f => f.id !== action.id);

            return {
                ...state,
                totalItemsCount: state.all.length,
                todoList: [...state.all]
            }
        case todoConstant.ALL:
            return {
                ...state,
                todoList: [...state.all]
            };
        case todoConstant.ACTIVE:
            return {
                ...state,
                todoList: state.all.filter(f => f.isActive === 1)
            };
        case todoConstant.COMPLETED:
            return {
                ...state,
                todoList: state.all.filter(f => f.isActive === 0)
            }
        case todoConstant.CLEAR_COMPLETED:
            const removedCompletedList = state.all.filter(f => f.isActive === 1);

            return {
                ...state,
                completedItems: 0,
                totalItemsCount: state.all.length,
                todoList: removedCompletedList,
                all: removedCompletedList
            }
        default:
            return state;
    }
};