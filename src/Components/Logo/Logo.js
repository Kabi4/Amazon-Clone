import React from 'react';
import image from './../../Assets/Logo/Logo.png';

const Logo = (props) => {
    return (
        <img src={image} className={props.classNaam} alt="LOGO"/>
    )
}

export default Logo
