import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

import configureStore from 'redux-mock-store';

/** connected component */
import { App } from '.';

const mockStore = configureStore([]);

describe('App - React|Redux connected version.', () => {
    let store;
    let component;

    beforeEach(() => {
        store = mockStore({
            appContainer: {
                isDarkThemeActive: true,
                backgroundColorClass: 'app-background-color-dark',
                backgroundImageClass: 'app-background-image-dark',
                InputColorClass: 'todo-input-dark',
                TextClass: 'todo-input-textbox-dark',
                ListClass: 'todo-list-dark',
                ListItemClass: 'todo-list-item-dark',
                actionSectionClass: 'todo-list-action-dark',
                actionButtonClass: 'todo-action-button-dark'
            },
            alertContainer: null,
            todoContainer: {
                leftItems: 0,
                totalItemsCount: 0,
                todoList: [],
                all: []
            }
        });

        store.dispatch = jest.fn();

        component = renderer.create(
            <Provider store={store}>
                <App />
            </Provider>
        );
    });

    test('should render with the given state from redux store', () => {
        expect(component.toJSON()).toMatchSnapshot();
    });
});