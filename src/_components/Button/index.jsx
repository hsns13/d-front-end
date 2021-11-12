import React from 'react';
import { Link } from 'react-router-dom';

const Button = (props) => {
    return !props.link ?
        (
            <button className={['button', `${props.mode}`].join(' ')}
                onClick={props.onClick}>
                {props.children}
            </button>
        ) : (
            <Link className={['link', `${props.mode}`].join(' ')}
                to={props.to}>
                {props.children}
            </Link>
        );
};

export {
    Button
}