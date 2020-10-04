import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Components/Logo/Logo';

import classes from './Header.css';

export default class Header extends Component {

    render() {
        return (
            <nav className={classes.header}>
                <Link to='/'>
                    <Logo classNaam={classes.header__logo} />
                </Link>
                <div className={classes.header__search}>
                    <input className={classes.header__searchInput} type="text" placeholder="Search for items Eg.Mobile,Headphone,Choclates" />
                </div>
                <p>Links</p>
                <p>Basket With Number</p>
            </nav>
        )
    }
}
