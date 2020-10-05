import React from 'react';

import classes from './Button.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Button = (props) => {
    return (
        <button className={classes.btn} >Add Item To Cart<ShoppingCartIcon/></button>
    )
};

export default Button;
