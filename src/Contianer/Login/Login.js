import React, { Component } from 'react';
import classes from './Login.css';

import { connect } from 'react-redux';

import Button from './../../Components/Button/Button';
import Input from './../../Components/Input/Input';
import Logo from '../../Components/Logo/Logo';
import Spinner from './../../Components/Spinner/Spinner';

import * as actionCreators from './../../Store/ActionCreators/Index';
import { Redirect } from 'react-router';

class Login extends Component {
    state = {
        customerInformation: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: '',
                    label: "Your Name"
                },
                elementValue: "",
                conditions:{
                    required: true,
                },
                isValid: false,
                haveChangedOnce: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: '',
                    label: "E-mail"
                },
                elementValue: "",
                conditions:{
                    required: true,
                    email: true
                },
                isValid: false,
                haveChangedOnce: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: '',
                    label: "Password"
                },
                elementValue: "",
                conditions:{
                    required: true,
                    isnumbers: 6
                },
                isValid: false,
                haveChangedOnce: false
            }
        },
        isSignUp: false 
    }

    inputChangeHandler = (e,id) =>{
        let form = {...this.state.customerInformation};
        form[id] = {
            ...this.state.customerInformation[id]
        };
        let isvalid =false;
        if(form[id].conditions){
            if(form[id].conditions.required){
                if((e.target.value).trim()!=='')isvalid=true;
                else isvalid=false;
            }
            if(form[id].conditions.email){
                let regex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                if(isvalid && regex.test(e.target.value))isvalid=true;
                else isvalid = false;
            }
            if(form[id].conditions.isnumbers){
                if(e.target.value.length>form[id].conditions.isnumbers)isvalid=true;
                else isvalid = false;
            }
        }
        form[id].haveChangedOnce = true;
        form[id].isValid = isvalid;
        form[id].elementValue = e.target.value;
        this.setState({customerInformation: form});
    }
    toggleSignMethodHandler = (e)=>{
        e.preventDefault();
        this.setState((prevState)=>{
            return {isSignUp: !prevState.isSignUp}
        })
    };

    auth = (e)=>{
        e.preventDefault();
        this.props.authenticate({email: this.state.customerInformation.email.elementValue,password: this.state.customerInformation.password.elementValue},this.state.isSignUp,this.state.customerInformation.name.elementValue)
    }

    render(){
        const allInputElements = [];
        for(let key in this.state.customerInformation){
            allInputElements.push({
                id: key,
                config: this.state.customerInformation[key]
            })
        };
        if(!(this.state.isSignUp)){
            allInputElements.splice(0,1);
        }

        let form = (<div className={classes.page} >
                        <form className={classes.form} onSubmit={(e)=>{this.auth(e)}}>
                            <h2>{this.state.isSignUp?"Sign-Up":"Sign-In"}</h2>
                            <h4 className={classes.error}>{this.props.err?this.props.err.replace(/_/g," "):null}</h4>
                            {allInputElements.map(ele=>{
                            return <Input label={ele.config.elementConfig.label} haveChangedOnce={ele.config.haveChangedOnce} isValid={ele.config.isValid} conditions={ele.config.conditions} changed={(e)=>{this.inputChangeHandler(e,ele.id);}}  key={ele.id} elementType={ele.config.elementType} elementConfig={ele.config.elementConfig} value={ele.config.elementValue} />
                        })}
                            <Button disable={allInputElements.some((ele,i,arr)=>{
                                return ele.config.isValid!==true;
                            })} >{this.state.isSignUp?"Sign Up":"Log In"}</Button>
                        </form>

                        <p>{this.state.isSignUp?"Here by i understand to share by required details!":"By This you agreed and understands all the Terms and Conditions by amazon as per a loyal customer of amazon."}</p>

                        <h4>{this.state.isSignUp?"Already have an account?":"New To Amazon Sign up?"}</h4>
                        <Button click={this.toggleSignMethodHandler}>{this.state.isSignUp?"Login to your account":"Create New Amazon Account?"}</Button>
                    </div>);
            if(this.props.loading){
                    form = <div style={{width: "400px"}} className={classes.page} >
                            <Spinner/>
                        </div>;
            }
        return (
            <div className={classes.login}>
                {this.props.auth?<Redirect to="/"/>:null}
                <Logo classNaam={classes.logo}/>
                {form}
            </div>
        )
    }
};

const mapStateToProps = (state)=>{
    return{
        err: state.auth.error,
        loading: state.auth.loading,
        auth: state.auth.authenticated,
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        authenticate: (data,signUp,name)=>{dispatch(actionCreators.authenticate(data,signUp,name))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);
