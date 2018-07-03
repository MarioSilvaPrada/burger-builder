import React from 'react';  
// import { withRouter } from 'react-router-dom'    if we need direct access to 'match'      export default withRouter(burger)

import style from './Burger.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'; 

const burger = ( props ) => {
    let transformedIngredients = Object.keys(props.ingredients) //transform an object into an array
        .map( igKey => {
            return [...Array(props.ingredients[igKey])].map( ( _ , index ) => {
                return <BurgerIngredients key={igKey + index} type = {igKey} />
            } )
        })
        .reduce((arr,el) => {
            return arr.concat(el)
        },[]);
        if (transformedIngredients.length === 0) {
            transformedIngredients = <p>Please, start adding ingredients</p>
        }
    
    return (
        <div className = {style.Burger}>
            <BurgerIngredients type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredients type="bread-bottom"/>
        </div>
    );
}

export default burger;