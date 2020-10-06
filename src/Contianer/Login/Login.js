import React, { Component } from 'react';
import classes from './Login.css';

import Button from './../../Components/Button/Button';
import Input from './../../Components/Input/Input';
import Logo from '../../Components/Logo/Logo';

class Login extends Component {
    state = {
        customerInformation: {
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

    render(){
        const allInputElements = [];
        for(let key in this.state.customerInformation){
            allInputElements.push({
                id: key,
                config: this.state.customerInformation[key]
            })
        };
        return (
            <div className={classes.login}>
                <Logo classNaam={classes.logo}/>
                <div className={classes.page} >
                    <form className={classes.form}>
                        <h2>Log-In</h2>
                        {allInputElements.map(ele=>{
                        return <Input label={ele.config.elementConfig.label} haveChangedOnce={ele.config.haveChangedOnce} isValid={ele.config.isValid} conditions={ele.config.conditions} changed={(e)=>{this.inputChangeHandler(e,ele.id);}}  key={ele.id} elementType={ele.config.elementType} elementConfig={ele.config.elementConfig} value={ele.config.elementValue} />
                    })}
                        <Button>Log In</Button>
                    </form>

                    <p>By This you agreed and understands all the Terms and Conditions by amazon as per a loyal customer of amazon.</p>

                    <h4>New To Amazon?</h4>
                    <Button>Create New Amazon Account?</Button>
                </div>
            </div>
        )
    }
};

export default Login;
