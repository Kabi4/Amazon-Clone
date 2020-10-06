import * as actionTypes from './../actionType';

export const additem = (item)=>{
    return{
        type: actionTypes.ADDITEMTOBASKET,
        payload: {
            item
        }
    }
};


export const removeitem = (id)=>{
    return{
        type: actionTypes.DELETEITEMFROMBASKET,
        payload: {
            id
        }
    }
};