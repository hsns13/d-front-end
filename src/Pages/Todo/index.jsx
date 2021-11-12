import React, { Component } from 'react';
import { connect } from 'react-redux';
import { appActions, todoActions } from '../../_store/_actions';

/** components */
import { Button } from '../../_components/Button';
import { List } from '../../_components/List';
import { InputTextBox } from '../../_components/Text';

class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isCheckBoxSelected: false,
            completedItems: 0,
            itemsToDelete: []
        };
    }

    componentDidMount() {
        this.props.getAllTodo();
    }

    onChangeTheme = (e) => {
        console.log('theme: ' + this.props.isDarkThemeActive);
        if (this.props.appContainer.isDarkThemeActive) {
            this.props.lightTheme();
        } else {
            this.props.darkTheme();
        }
    }

    // add new item to the list
    onHandleKeyDown = (textValue) => {
        this.props.addTodo({
            id: Math.random(),
            isActive: 1,
            todoText: textValue
        });
    }

    // update item on the list
    onUpdate = (id) => {
        this.props.updateTodo(id);
    }

    // remove item on the list
    onRemove = (id) => {
        this.props.removeTodo(id);
    }

    // get all items on the list, either active or completed
    onAll = (e) => {
        this.props.all();
    }

    // get active items
    onActive = (e) => {
        this.props.active();
    }

    // get completed items
    onCompleted = (e) => {
        this.props.completed();
    }

    // remove completed items from db
    onClearCompleted = (e) => {
        this.props.clearCompleted();
    }

    render() {
        const { appContainer, totalItemsCount, leftItems, list } = this.props;

        const themeButton = appContainer.isDarkThemeActive ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="#FFF" d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z" /></svg>
        ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="#FFF" fillRule="evenodd" d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z" /></svg>
        );

        return (
            <div className="todo-container">
                <div className="todo-header">
                    <span className="todo-header__heading">T O D O</span>
                    <span className="todo-header__icon">
                        <Button onClick={this.onChangeTheme}>
                            {
                                themeButton
                            }
                        </Button>
                    </span>
                </div>
                <div className={['todo-input', `${appContainer.InputColorClass}`].join(' ')}>
                    <InputTextBox onHandleKeyDown={this.onHandleKeyDown} textTheme={appContainer.TextClass} />
                </div>
                {
                    list.length > 0 && <List
                        todoList={list}
                        theme={appContainer}
                        onUpdate={this.onUpdate}
                        onRemove={this.onRemove} />
                }
                {
                    totalItemsCount > 0 && (
                        <div className={['todo-list__action', `${appContainer.actionSectionClass}`].join(' ')}>
                            <div className="todo-list__action__info">
                                {
                                    `${leftItems} items left`
                                }
                            </div>
                            <div>
                                <Button onClick={this.onAll} mode={appContainer.actionButtonClass}>All</Button>
                                <Button onClick={this.onActive} mode={appContainer.actionButtonClass}>Active</Button>
                                <Button onClick={this.onCompleted} mode={appContainer.actionButtonClass}>Completed</Button>
                            </div>
                            <div>
                                <Button onClick={this.onClearCompleted} mode={appContainer.actionButtonClass}>Clear completed</Button>
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { appContainer, todoContainer } = state;
    const { totalItemsCount, leftItems, todoList } = todoContainer;

    return {
        appContainer,
        totalItemsCount,
        leftItems,
        list: todoList
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        darkTheme: () => dispatch(appActions.darkTheme()),
        lightTheme: () => dispatch(appActions.lightTheme()),
        addTodo: (todoItem) => dispatch(todoActions.startAdd(todoItem)),
        updateTodo: (id) => dispatch(todoActions.startUpdate(id)),
        removeTodo: (id) => dispatch(todoActions.startRemove(id)),
        getAllTodo: () => dispatch(todoActions.startGetAll()),
        all: () => dispatch(todoActions.all()),
        active: () => dispatch(todoActions.active()),
        completed: () => dispatch(todoActions.completed()),
        clearCompleted: () => dispatch(todoActions.startClearCompleted())
    }
};

const connectedTodo = connect(mapStateToProps, mapDispatchToProps)(Todo);

export {
    connectedTodo as Todo
};