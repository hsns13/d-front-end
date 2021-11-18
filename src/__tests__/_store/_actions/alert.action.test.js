import { alertActions } from '../../../_store/_actions';
import { alertConstant } from '../../../_store/_constants';

test('should return add todo action object', () => {
    const action = alertActions.success('test message');
    expect(action).toStrictEqual({
        type: alertConstant.SUCCESS,
        message: 'test message'
    });
});

test('should return update todo action object', () => {
    const action = alertActions.error('test error');
    expect(action).toStrictEqual({
        type: alertConstant.ERROR,
        message: 'test error'
    });
});

test('should return remove todo action object', () => {
    const action = alertActions.clear();
    expect(action).toStrictEqual({
        type: alertConstant.CLEAR,
    });
});