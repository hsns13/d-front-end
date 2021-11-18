import { appActions } from '../../../_store/_actions';
import { appConstant } from '../../../_store/_constants';

test('should return add todo action object', () => {
    const action = appActions.darkTheme();
    expect(action).toStrictEqual({
        type: appConstant['DARK THEME']
    });
});

test('should return update todo action object', () => {
    const action = appActions.lightTheme();
    expect(action).toStrictEqual({
        type: appConstant['LIGHT THEME']
    });
});