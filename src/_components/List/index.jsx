import React from 'react';

import { ListItem } from '../ListItem';

const List = (props) => {
    return (
        <div className={['todo-list', `${props.theme.ListClass}`].join(' ')}>
            {
                props.todoList.map((item) => {
                    return (
                        <ListItem key={item.id} 
                            data={item} 
                            theme={props.theme} 
                            onUpdate={props.onUpdate}
                            onRemove={props.onRemove}>
                            {
                                item.todoText
                            }
                        </ListItem>
                    );
                })
            }
        </div>
    );
};

export {
    List
}