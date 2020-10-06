import React from 'react';

import advertisement from './../../Assets/Photos/Add.jpg';

const AddImage = (props) => {
    return <img src={advertisement} className={props.classNaam} alt="Amazon Advertisement" />
};

export default AddImage;
