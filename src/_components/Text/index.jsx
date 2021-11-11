import React, { useState } from 'react';

export const InputTextBox = (props) => {
    const [textValue, SetTextValue] = useState('');

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            props.onHandleKeyDown(textValue);
            e.target.value = '';
        }
    }

    const onTextChange = (e) => {
        const text = e.target.value;
        SetTextValue(text);
    }

    return <input
        className={['todo-input-textbox', `${props.textTheme}`].join(' ')}
        type='text'
        onKeyDown={handleKeyDown}
        onChange={onTextChange} />
}