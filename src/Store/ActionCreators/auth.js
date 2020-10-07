import * as actionTypes from './../actionType';

import axios from 'axios';

import * as actionCreators from './Index';

let token;
let usid;
let expire;


const logoutAccount = ()=>{
    return{
        type: actionTypes.LOGOUT
    }
}

export const logout = ()=>{
    return dispatch=>{
       dispatch(logoutAccount());
       dispatch(actionCreators.resetuser());
    }
};

const AUTH__SUCCESS = (token,userID) =>{
    return{
        type: actionTypes.SIGNINSUCCESS,
        payload: {
            token,
            userID
        }
    }
};

const AUTH__FAILED = (message)=>{
    return{
        type: actionTypes.SIGNINFAILED,
        payload:{
            message: message
        }
    }
}

const AUTH__STARTED = ()=>{
    return{
        type: actionTypes.SIGNINSTARTED
    }
}

export const authenticate = (data,isSignup,name)=>{
    return dispatch=>{
        dispatch(AUTH__STARTED());
        const authData = {
            ...data,
            returnSecureToken: true
        }
        let url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCeL5a1k-3p1y1iqhklJHy74LqI52cLOCY";
        if(isSignup){
            url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCeL5a1k-3p1y1iqhklJHy74LqI52cLOCY";
        }
        axios.post(url,authData)
        .then(res=>{
            token = res.data.idToken;
            usid = res.data.localId;
            expire = parseInt(res.data.expiresIn,10);
            if(isSignup){
                name = name.split(" ");
                name = name[0];
                dispatch(actionCreators.setuser(name));
                axios.post(`https://clone-5bc21.firebaseio.com/users.json?auth=${res.data.idToken}`,{
                name: name,
                userid: res.data.localId
                })
                .then(res=>{
                    dispatch(AUTH__SUCCESS(token,usid));
                    setTimeout(()=>{
                        dispatch(logout());
                    },expire*1000)
                })
                .catch(err=>{
                    if(err.response){
                        dispatch(AUTH__FAILED(err.response.data.error.message));
                    }else{ 
                        dispatch(AUTH__FAILED("NETWORK ERROR"));
                    }});
            }else{
                axios.get(`https://clone-5bc21.firebaseio.com/users.json?auth=${res.data.idToken}`)
                .then(res=>{
                    let namer = res.data[Object.keys(res.data).find(ele=>{
                        return res.data[ele].userid===usid;
                    })]
                    .name;
                    namer = namer.split(" ");
                    namer = namer[0];
                    dispatch(actionCreators.setuser(namer));
                    dispatch(AUTH__SUCCESS(token,usid));
                    setTimeout(()=>{
                        dispatch(logout())
                    },expire*1000)
                    }).catch(err=>{
                    if(err.response){dispatch(AUTH__FAILED(err.response.data.error.message));}else{
                    dispatch(AUTH__FAILED("NETWORK ERROR"));
                }});
            }
        })
        .catch(err=>{
            if(err.response){dispatch(AUTH__FAILED(err.response.data.error.message));}else{
                dispatch(AUTH__FAILED("NETWORK ERROR"));
            }});
    }
}