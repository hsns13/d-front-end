import { appConstant } from '../_constants';

const darkTheme = () => {
    return {
        type: appConstant['DARK THEME']
    }
};

const lightTheme = () => {
    return {
        type: appConstant['LIGHT THEME']
    }
};

export const appActions = {
    darkTheme,
    lightTheme
}