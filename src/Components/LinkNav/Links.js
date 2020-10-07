import React from 'react';
import classes from './Links.css';

import {Link} from 'react-router-dom';

const Links = (props) => {
    return (
        <Link onClick={props.click?(e)=>{
            e.preventDefault();
            props.click();
        }:null} to={props.pathing}>
            <div className={classes.links}>
                <span className={classes.link__child1}>{props.first} <span>{props.name?props.name:null}</span> ,</span>
                <span className={classes.link__child2}>{props.second==="Sign In"?props.name?"Sign Out":props.second:props.second}</span>
            </div>
        </Link>
    )
};

export default Links;
