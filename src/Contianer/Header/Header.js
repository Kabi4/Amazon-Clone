import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Components/Logo/Logo';

import classes from './Header.css';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import Links from '../../Components/LinkNav/Links';

export default class Header extends Component {

    render() {
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
                    <Links first="Hello," second="Sing In" pathing="/login" />
                    <Links first="Returns," second="& Orders" pathing="/" />
                    <Links first="Try," second="Prime" pathing="/" />
                </div>
                <Link to="/cart" className={classes.header__cartLink}>
                    <div className={classes.header__cart}>
                        <ShoppingCartIcon className={classes.header__shoppingCart} />
                        <p className={classes.header__cart__items}>0</p>
                    </div>
                </Link>
            </nav>
        )
    }
}
