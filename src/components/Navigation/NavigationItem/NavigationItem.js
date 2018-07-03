import React from 'react';
import {NavLink} from 'react-router-dom';

import style from './NavigationItem.css';

const navigationItem = (props) => (
    <li className={style.NavigationItem}>
        <NavLink activeClassName= {style.active} exact={props.exact} to={props.link}> {props.children} </NavLink>
    </li>
);

export default navigationItem;