import * as actionTypes from './../actionType';

const initialState = {
    authenticated: false,
    error: false,
    loading: false,
    token: null,
    userId: null
}

const authReducer = (state=initialState,action)=>{
    switch(action.type){
        case actionTypes.SIGNINSUCCESS:
            return{
                ...state,
                authenticated: true,
                error: false,
                token: action.payload.token,
                userId: action.payload.userID,
                loading: false
            };
        case actionTypes.SIGNINFAILED:
            return{
                ...state,
                error: action.payload.message,
                loading: false
            };
        case actionTypes.SIGNINSTARTED:
            return{
                ...state,
                loading: true
            }
        case actionTypes.LOGOUT:
            return{
                ...state,
                authenticated: false,
                error: false,
                loading: false,
                token: null,
                userId: null
            }
        default:
            return state;
    }
};

export default authReducer;