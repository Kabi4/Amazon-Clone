import React from 'react';
import classes from './Links.css';

import {Link} from 'react-router-dom';

const Links = (props) => {
    return (
        <Link to={props.pathing}>
            <div className={classes.links}>
                <span className={classes.link__child1}>{props.first}</span>
                <span className={classes.link__child2}>{props.second}</span>
            </div>
        </Link>
    )
};

export default Links;
