import * as actionTypes from './../actionType';

const initialState = {
    name: null
};

const userReducer = (state=initialState,action)=>{
    switch(action.type){
        case actionTypes.SETUSER:
            return{
                ...state,
                name: action.payload.name
            }
        case actionTypes.RESETUSER:
            return{
                ...state,
                name: null
            }
        default: 
            return state; 
    }
};

export default userReducer;