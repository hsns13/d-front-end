import React, { Component } from 'react';
import { connect } from 'react-redux';
import { todoActions } from '../../_store/_actions';

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
    onRemove = (e) => {

    }

    // get all items on the list, either active or completed
    onGetAll = (e) => {
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
        this.props.clearCompleted(this.state.itemsToDelete);
    }

    render() {
        const { completedItems, list } = this.props;

        return (
            <div className="todo-container">
                <div className="todo-header">
                    <span className="todo-header__heading">T O D O</span>
                    <span className="todo-header__icon">
                        <Button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="#FFF" d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z" /></svg>
                        </Button>
                    </span>
                </div>
                <div className="todo-input">
                    <InputTextBox onHandleKeyDown={this.onHandleKeyDown} />
                </div>
                {
                    list.length > 0 && <List
                        todoList={list}
                        onUpdate={this.onUpdate}
                        onRemove={this.onRemove} />
                }
                {
                    list.length > 0 && (
                        <div className="todo-list__action">
                            <div className="todo-list__action__info">
                                {
                                    `${completedItems} items completed`
                                }
                            </div>
                            <div>
                                <Button onClick={this.onGetAll}>All</Button>
                                <Button onClick={this.onActive}>Active</Button>
                                <Button>Completed</Button>
                            </div>
                            <div>
                                <Button>Clear completed</Button>
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { todoContainer } = state;
    const { completedItems, todoList } = todoContainer;

    console.log('todo container');
    console.log(todoContainer);
    return {
        completedItems,
        list: todoList
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (todoItem) => dispatch(todoActions.startAdd(todoItem)),
        updateTodo: (id) => dispatch(todoActions.startUpdate(id)),
        removeTodo: (id) => dispatch(todoActions.startRemove(id)),
        getAllTodoList: () => dispatch(todoActions.startGetAll()),
        all: () => dispatch(todoActions.all()),
        active: () => dispatch(todoActions.active()),
        completed: () => dispatch(todoActions.completed()),
        clearCompleted: (items) => dispatch(todoActions.startClearCompleted(items))
    }
};

const connectedTodo = connect(mapStateToProps, mapDispatchToProps)(Todo);

export {
    connectedTodo as Todo
};