import { appConstant } from '../_constants';

const defaultState = {
    isDarkThemeActive: true,
    backgroundColorClass: 'app-background-color-dark',
    backgroundImageClass: 'app-background-image-dark',
    InputColorClass: 'todo-input-dark',
    TextClass: 'todo-input-textbox-dark'
};

export const appReducer = (state = defaultState, action) => {
    switch(action.type) {
        case appConstant['DARK THEME']:
            return {
                ...state,
                isDarkThemeActive: !state.isDarkThemeActive,
                backgroundColorClass: 'app-background-color-dark',
                backgroundImageClass: 'app-background-image-dark',
                InputColorClass: 'todo-input-dark',
                TextClass: 'todo-input-textbox-dark'
            }
        case appConstant['LIGHT THEME']:
            return {
                ...state,
                isDarkThemeActive: !state.isDarkThemeActive,
                backgroundColorClass: 'app-background-color-light',
                backgroundImageClass: 'app-background-image-light',
                InputColorClass: 'todo-input-light',
                TextClass: 'todo-input-textbox-light'
            }
        default:
            return state;
    }
};