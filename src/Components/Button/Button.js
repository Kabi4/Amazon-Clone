import React from 'react';

import classes from './Button.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Button = (props) => {
    return (
    <button disabled={props.disable} onClick={props.click} className={classes.btn} >{props.children?null:"Add Item To Cart "}{props.children?props.children:<ShoppingCartIcon/>}</button>
    )
};

export default Button;
