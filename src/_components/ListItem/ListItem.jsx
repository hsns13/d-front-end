import React, { useState, useEffect } from 'react';

const ListItem = (props) => {
    const [clicked, setClicked] = useState(false);
    const [selected, setSelected] = useState('');

    useEffect(() => {
        if (!props.data.isActive) {
            setClicked(true);
            setSelected('todo-list__checkbox-first');
        }
    }, [props.data.isActive]);

    const getClickedButton = () => {
        if (clicked) {
            return <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="#FFF" strokeWidth="2" d="M1 4.304L3.696 7l6-6" /></svg>;
        }

        return null;
    }

    const onClick = (e) => {
        setClicked(!clicked);
        setSelected(!clicked ? 'todo-list__checkbox-first' : '');

        props.onUpdate(props.data.id);
    }

    return (
        <div className="todo-list__item">
            <div className={['todo-list__checkbox', `${selected}`].join(' ')}
                onClick={onClick}>
                {
                    getClickedButton()
                }
            </div>
            <div className="todo-list__label">
                {
                    props.children
                }
                {
                    clicked &&
                    <div className="todo-list__item__line">
                    </div>
                }
            </div>
        </div>
    );
};

export {
    ListItem
}