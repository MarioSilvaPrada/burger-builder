import React from 'react';

import style from './Button.css';

const button = (props) => (
    <button className = {[style.Button, style[props.btnType]].join(' ')} onClick={props.click}>
        {props.children}
    </button>
);

export default button;