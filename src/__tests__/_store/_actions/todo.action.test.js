import { todoActions } from '../../../_store/_actions';
import { todoConstant } from '../../../_store/_constants';

test('should return add todo action object', () => {
    const action = todoActions.add({});
    expect(action).toStrictEqual({
        type: todoConstant.ADD,
        todoItem: {}
    });
});

test('should return update todo action object', () => {
    const action = todoActions.update({});
    expect(action).toStrictEqual({
        type: todoConstant.UPDATE,
        todoItem: {}
    });
});

test('should return remove todo action object', () => {
    const action = todoActions.remove('123');
    expect(action).toStrictEqual({
        type: todoConstant.REMOVE,
        id: '123'
    });
});