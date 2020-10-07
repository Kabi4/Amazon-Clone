import * as actionTypes from './../actionType';

export const setuser = (name)=>{
    return{
        type: actionTypes.SETUSER,
        payload:{
            name
        }
    }
};

export const resetuser = ()=>{
    return{
        type: actionTypes.RESETUSER
    }
}