import React from 'react'
import HomeImage from '../HomeImage/HomeImage';

import classes from './Home.css';

const Home = () => {
    return (
        <div className={classes.home}>
            <HomeImage classNaam={classes.home__image}/>
        </div>
    )
}

export default Home
