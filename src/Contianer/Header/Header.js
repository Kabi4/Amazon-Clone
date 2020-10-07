import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Components/Logo/Logo';

import classes from './Header.css';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import Links from '../../Components/LinkNav/Links';

import * as actionCreators from './../../Store/ActionCreators/Index';

import { connect } from 'react-redux';

class Header extends Component {
    render() {
        let loginLink = <Links first="Hello" second="Sign In" pathing="/login" />;
        if(this.props.name!==null){
            loginLink = <Links click={this.props.logout} name={this.props.name} first="Hello" second="Sign In" pathing="/login" />;
        }
        return (
            <nav className={classes.header}>
                <Link to='/'>
                    <Logo classNaam={classes.header__logo} />
                </Link>
                <div className={classes.header__search}>
                    <input className={classes.header__searchInput} type="text" placeholder="Search for items Eg.Mobile,Headphone,Choclates" />
                    <SearchIcon className={classes.header__searchIcon}/>
                </div>
                <div className={classes.header__navbar}>
                    {loginLink}
                    <Links first="Returns" second="& Orders" pathing={this.props.name?"/":"/login"} />
                    <Links first="Try" second="Prime" pathing="/" />
                </div>
                <Link to="/cart" className={classes.header__cartLink}>
                    <div className={classes.header__cart}>
                        <ShoppingCartIcon className={classes.header__shoppingCart} />
                        <p className={classes.header__cart__items}>{this.props.basket.length===0?0
                        :this.props.basket.reduce((ele,red)=>{return red.quantity+ele},0)
                        }</p>
                    </div>
                </Link>
            </nav>
        )
    }
};

const mapStateToProps = (state) =>{
    return{
        basket: state.basket.items,
        name: state.user.name
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        logout: ()=>{dispatch(actionCreators.logout())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);