import React from 'react';
import Button from '../Button/Button';

import classes from './Subtotal.css';

const Subtotal = (props) => {
    return (
        <div className={classes.subtotal}>
            <h2>Subtotal ({props.items} Items): <span>₹ {props.price}.00 Only</span></h2>
            <div className={classes.gift}>
                <label ><input className={classes.input} value="gift" type="checkbox"/>This item contain as gift.</label>
            </div>
            <Button disable={props.items===0?true:false} >Proceed To Checkout</Button>
        </div>
    )
};

export default Subtotal;
