import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import style from './SideDrawer.css'
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxi'

const sidedrawer = (props) => {
    let attachedClasses = [style.SideDrawer, style.Close];
    if (props.open) {
        attachedClasses = [style.SideDrawer, style.Open];
    }
    
    return(
        <Aux>
            <Backdrop show = {props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <Logo heigth="11%"/>
                <nav>
                    <NavigationItems isAuthenticated = {props.isAuth} />
                </nav>
            </div>
        </Aux>
    );
}

export default sidedrawer;