import { alertReducer } from '../../../_store/_reducers';
import { alertActions } from '../../../_store/_actions';

test('should set default state', () => {
    const state = alertReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual(null);
});

test('should set success message', () => {
    const action = alertActions.success('success');

    const state = alertReducer(undefined, action);
    expect(state.message).toEqual(action.message);
});

test('should set error message', () => {
    const action = alertActions.error('error');

    const state = alertReducer(undefined, action);
    expect(state.message).toEqual(action.message);
});

test('should set to null', () => {
    const action = alertActions.clear();

    const state = alertReducer(undefined, action);
    expect(state).toEqual(null);
});