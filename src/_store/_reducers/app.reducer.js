import { appConstant } from '../_constants';

const defaultState = {
    isDarkThemeActive: true,
    backgroundColorClass: 'app-background-color-dark',
    backgroundImageClass: 'app-background-image-dark',
    InputColorClass: 'todo-input-dark',
    TextClass: 'todo-input-textbox-dark',
    ListClass: 'todo-list-dark',
    ListItemClass: 'todo-list-item-dark',
    actionSectionClass: 'todo-list-action-dark',
    actionButtonClass: 'todo-action-button-dark'
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
                TextClass: 'todo-input-textbox-dark',
                ListClass: 'todo-list-dark',
                ListItemClass: 'todo-list-item-dark',
                actionSectionClass: 'todo-list-action-dark',
                actionButtonClass: 'todo-action-button-dark'
            }
        case appConstant['LIGHT THEME']:
            return {
                ...state,
                isDarkThemeActive: !state.isDarkThemeActive,
                backgroundColorClass: 'app-background-color-light',
                backgroundImageClass: 'app-background-image-light',
                InputColorClass: 'todo-input-light',
                TextClass: 'todo-input-textbox-light',
                ListClass: 'todo-list-light',
                ListItemClass: 'todo-list-item-light',
                actionSectionClass: 'todo-list-action-light',
                actionButtonClass: 'todo-action-button-light'
            }
        default:
            return state;
    }
};