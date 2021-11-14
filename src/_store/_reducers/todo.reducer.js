import { todoConstant } from '../_constants';

const defaultState = {
    leftItems: 0,
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
                leftItems: ++state.leftItems,
                totalItemsCount: state.all.length,
                todoList: [...state.all]
            }
        case todoConstant.UPDATE:
            const index = state.all.findIndex(f => f.id === action.id);

            const updatingItem = state.all.find(f => f.id === action.id);
            updatingItem.isActive = updatingItem.isActive ? 0 : 1;

            state.all[index] = updatingItem;

            const leftItems = state.all.length - state.all.filter(f => f.isActive === 0).length;

            return {
                ...state,
                leftItems: leftItems,
                todoList: [...state.all],
            }
        case todoConstant.REMOVE:
            const item = state.all.find(f => f.id === action.id);
            state.all = state.all.filter(f => f.id !== action.id);

            return {
                ...state,
                leftItems: item.isActive ? --state.leftItems : state.leftItems,
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
                totalItemsCount: state.all.length,
                todoList: removedCompletedList,
                all: removedCompletedList
            }
        default:
            return state;
    }
};