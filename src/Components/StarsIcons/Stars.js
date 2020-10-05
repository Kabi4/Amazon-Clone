import StarRoundedIcon from '@material-ui/icons/StarRounded';
import StarHalfRoundedIcon from '@material-ui/icons/StarHalfRounded';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import classes from './Stars.css';

import React from 'react'

const Stars = (props) => {
    let stars = [];
    let count = 1;
    while(count<=props.rating){
        stars.push(<StarRoundedIcon className={classes.star} key={count} />);
        count++;
    }
    if(props.rating-count+1>0.14 && count<=5){
        stars.push(<StarHalfRoundedIcon className={classes.star} key={count} />);
        count++;
    }
    while(count<=5){
        stars.push(<StarBorderIcon className={classes.star} key={count} />);
        count++;
    }
    return (
        <div className={classes.stars}>
            {stars}
        </div>
    )
}

export default Stars
