import React, { Component } from 'react';

import { connect } from 'react-redux';
import AddImage from '../../Components/AddImage/AddImage';
import Subtotal from '../../Components/Subtotal/Subtotal';

import classes from './Cart.css';

import CartProduct from '../../Components/Product/CartProduct/CartProduct';

class Cart extends Component {
    render() {
        let products = [];
        if(this.props.basket.length>0){
            this.props.basket.map(ele=>{
                products.push(<CartProduct key={ele.item.id} item={ele.item} quantity={ele.quantity} />)
                return null;
            })
        }
        if(products.length===0){
            products.push(<h1 key="emptycart" style={{backgroundColor: 'white',borderRadius: "10px",margin: "20px auto",padding: "10px",fontfamily: "'Roboto', sans-serif",color: "black",fontStyle: "italic"}} > Oops, Sorry you don't have any item in your cart.</h1>)
        }
        return (
            <div className={classes.cart}>
                <div className={classes.cart__top}>
                    <AddImage classNaam={classes.image}/>
                    <Subtotal items={this.props.basket.length===0?0:this.props.basket.reduce((ele,red)=>{return red.quantity+ele},0)}
                        price = {this.props.basket.length===0?0
                        :this.props.basket.reduce((ele,red)=>{
                            console.log(red)
                            let quantity = red.quantity;
                            let price = red.item.price;
                            price = price.replace("₹","");
                            price = price.replace(/,/g,"");
                            price = parseInt(price,10);
                            return price*quantity + ele;
                        },0)}
                    />
                </div>
                {products}
            </div>
        )
    }
};

const mapStateToProps = (state)=>{
    return{
        basket: state.basket.items
    }
};


export default connect(mapStateToProps,null)(Cart);