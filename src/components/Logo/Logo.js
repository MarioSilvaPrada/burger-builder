import React from 'react';

import style from './Logo.css'
import burgerLogo from '../../assets/img/burger-logo.png'

const logo = (props) => (
    <div className={style.Logo} style={{height: props.heigth}}>
        <img src={burgerLogo} alt='MyBurger'></img>
    </div>
);

export default logo;