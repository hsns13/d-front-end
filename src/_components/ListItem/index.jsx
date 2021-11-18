import React, { useState } from 'react';

// import component
import { Button } from '../Button';

const ListItem = (props) => {
    const [state, setState] = useState({
        clicked: props.data?.isActive === 1 ? false : true,
        checkboxSelected: props.data?.isActive === 1 ? '' : 'checkbox-selected',
        itemSelected: props.data?.isActive === 1 ? '' : 'label-selected'
    });

    const getClickedButton = () => {
        if (state.clicked) {
            return <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="#FFF" strokeWidth="2" d="M1 4.304L3.696 7l6-6" /></svg>;
        }

        return null;
    }

    const onClick = (e) => {
        props.onUpdate({
            ...props.data,
            isActive: !state.clicked ? 0 : 1
        });

        setState({
            clicked: !state.clicked,
            checkboxSelected: !state.clicked ? 'checkbox-selected' : '',
            itemSelected: !state.clicked ? 'label-selected' : ''
        });

        console.log('continuing');
        console.log(state.clicked);
    }

    const onRemove = (e) => {
        e.preventDefault();
        props.onRemove(props.data.id);
    }

    return (
        <div className={['todo-list-item', `${props.theme?.ListItemClass}`].join(' ')}>
            <div className={['todo-list-item__checkbox', `${state.checkboxSelected}`, `${props.theme?.ListItemClass}`].join(' ')}
                onClick={onClick}>
                {
                    getClickedButton()
                }
            </div>
            <div className={['todo-list-item__label', `${props.theme?.ListItemClass}`, `${state.itemSelected}`].join(' ')}>
                {
                    props.children
                }
            </div>
            <div className="todo-list-item__remove-button">
                <Button onClick={onRemove}>
                    X
                </Button>
            </div>
        </div>
    );
};

export {
    ListItem
}