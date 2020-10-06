import React from 'react';
import Button from '../../Button/Button';
import Stars from '../../StarsIcons/Stars';

import { connect } from 'react-redux';

import * as actionCreators from '../../../Store/ActionCreators/Index';

import classes from './Product.css';

const Product = (props) => {
    return (
        <div className={classes.product}>
            <h2>{props.name}</h2>
            <Stars rating={props.rating}/>
            <h4>Rating: {props.rating} out of 5</h4>
            <img src={props.source} alt="Product" />
            <h3>Price: {props.price} <span>{props.price.replace(props.price[1],parseInt(props.price[1],10)+1)}</span> </h3>
            <Button click={()=>{props.addtocart(
                {
                    item: {id: props.id,name: props.name,source: props.source,price: props.price,rating: props.rating},
                    quantity: 1
                }
            )}} />
        </div>
    )
};

const mapDispatchToProps = (dispatch) =>{
    return{
        addtocart: (e)=>{dispatch(actionCreators.additem(e))}
    }
}

export default connect(null,mapDispatchToProps)(Product);
