import { todoReducer } from '../../../_store/_reducers';
import { todoActions } from '../../../_store/_actions';

test('should set default state', () => {
    const state = todoReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual(
        {
            leftItems: 0,
            totalItemsCount: 0,
            todoList: [],
            all: []
        });
});

describe('App - React|Redux connected version.', () => {
    test('should add 1 todo into the todoList and all', () => {
        const action = todoActions.add({
            id: '1',
            isActive: 1,
            todoText: 'test text'
        });

        const state = todoReducer(undefined, action);
        expect(state.todoList[0].todoText).toEqual(action.todoItem.todoText);
        expect(state.all[0].todoText).toEqual(action.todoItem.todoText);
    });

    test('should update', () => {
        const action = todoActions.update({
            id: '1',
            isActive: 0,
            todoText: 'test text update'
        });

        const state = todoReducer(undefined, action);
        expect(state.todoList[0].isActive).toEqual(0);
        expect(state.todoList[0].todoText).toEqual('test text update');
    });

    test('should remove', () => {
        const action_remove = todoActions.remove('1');

        const state = todoReducer(undefined, action_remove);
        expect(state).toEqual({
            leftItems: 0,
            totalItemsCount: 0,
            todoList: [],
            all: []
        });
    });
});