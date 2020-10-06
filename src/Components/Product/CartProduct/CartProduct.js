import React from 'react';
import Button from '../../Button/Button';
import Stars from './../../StarsIcons/Stars';

import classes from './CartProduct.css';

import { connect } from 'react-redux';

import * as actionCreators from './../../../Store/ActionCreators/Index';

const CartProduct = (props) => {
    return (
        <div className={classes.cartproduct}>
            <img src={props.item.source} alt="Product" />
            <div className={classes.cartproduct__details}>
                <h2>{props.item.name}</h2>
                <Stars rating={props.item.rating} />
                <h3>{props.item.rating} of 5 stars</h3>
            </div>
            <div className={classes.cartproduct__price}>
                <h2>{props.item.price}</h2>
                <h4>Quantity: {props.quantity}</h4>
                <Button click={()=>{props.removeitem(props.item.id)}} >Remove item</Button>
            </div>
        </div>
    )
};

const mapDisptachToProps = (dispatch)=>{
    return{
        removeitem: (id)=>{dispatch(actionCreators.removeitem(id))}
    }
}

export default connect(null,mapDisptachToProps)(CartProduct);
