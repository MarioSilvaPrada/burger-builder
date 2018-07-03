import React from 'react';
import style from './Backdrop.css'

const backdrop = ( props ) => (
    props.show ? <div className = {style.Backdrop} onClick = {props.clicked}></div> : null
);

export default backdrop;