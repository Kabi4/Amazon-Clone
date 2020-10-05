import React from 'react';

import Home from './../../Assets/Photos/Home.jpg';

const HomeImage = (props) => {
    return (
        <img className={props.classNaam} src={Home} alt="Home"/>
    )
}

export default HomeImage;
