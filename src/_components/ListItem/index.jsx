import React, { useState, useEffect } from 'react';

const ListItem = (props) => {
    // const [clicked, setClicked] = useState(false);
    // const [selected, setSelected] = useState('');

    const [state, setState] = useState({
        clicked: false,
        checkboxSelected:'',
        itemSelected: ''
    });

    useEffect(() => {
        if (!props.data.isActive) {
            setState({
                clicked: true,
                checkboxSelected: 'checkbox-selected',
                itemSelected: 'label-selected'
            });
        }
    }, [props.data.isActive]);

    const getClickedButton = () => {
        if (state.clicked) {
            return <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="#FFF" strokeWidth="2" d="M1 4.304L3.696 7l6-6" /></svg>;
        }

        return null;
    }

    const onClick = (e) => {
        setState({
            clicked: !state.clicked,
            checkboxSelected: !state.clicked ? 'checkbox-selected' : '',
            itemSelected: !state.clicked ? 'label-selected' :''
        });

        props.onUpdate(props.data.id);
    }

    return (
        <div className={['todo-list-item', `${props.theme.ListItemClass}`].join(' ')}>
            <div className={['todo-list-item__checkbox', `${state.checkboxSelected}`, `${props.theme.ListItemClass}`].join(' ')}
                onClick={onClick}>
                {
                    getClickedButton()
                }
            </div>
            <div className={['todo-list-item__label', `${props.theme.ListItemClass}`, `${state.itemSelected}`].join(' ')}>
                {
                    props.children
                }
            </div>
        </div>
    );
};

export {
    ListItem
}