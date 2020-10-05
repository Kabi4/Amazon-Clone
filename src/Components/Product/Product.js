import React from 'react';
import Button from '../Button/Button';
import Stars from '../StarsIcons/Stars';

import classes from './Product.css';

const Product = (props) => {
    return (
        <div className={classes.product}>
            <h2>{props.name}</h2>
            <Stars rating={props.rating}/>
            <img src={props.source} alt="Product" />
            <h3>Price: {props.price} <span>{props.price.replace(props.price[1],parseInt(props.price[1],10)+1)}</span> </h3>
            <Button/>
        </div>
    )
};

export default Product;
