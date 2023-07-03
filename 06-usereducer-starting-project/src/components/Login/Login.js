import React, { useState, useEffect, useReducer, useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';
import Input from '../UI/Input/Input';


const emailReducer=(state,action)=>{
  console.log("pk")

  if(action.type==='User-Input'){

    return {value:action.val, isValid:action.val.includes('@')}
  }
  if(action.type==='Input-Blur'){

    return {value:state.value, isValid:state.value.includes('@')}
  }
return {value:'', isValid:false}

}

const passwordReducer=(state,action)=>{

  if(action.type==='User-Input'){

    return {value:action.val, isValid:action.val.trim().length > 6}
  }
  if(action.type==='Input-Blur'){

    return {value:state.value, isValid:state.value.trim().length > 6}
  }
return {value:'', isValid:false}

}



const Login = (props) => {
  //const [enteredEmail, setEnteredEmail] = useState('');
  //const [emailIsValid, setEmailIsValid] = useState();
  //const [enteredPassword, setEnteredPassword] = useState('');
  //const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

const[emailState,dispatchEmail]=useReducer(emailReducer,{value:'', isValid:null})
const[passwordState,dispatchPassword]=useReducer(passwordReducer,{value:'', isValid:null})

const ct=useContext(AuthContext)

 // useEffect(() => {
   // console.log('EFFECT RUNNING');

    //return () => {
      //console.log('EFFECT CLEANUP');
    //};
  //}, []);

  const{isValid: emailValid}=emailState
  const{isValid: passwordValid}=passwordState
 
   useEffect(() => {
     const identifier = setTimeout(() => {
       console.log('Checking form validity!');
       setFormIsValid(
         emailValid && passwordValid
       );
     }, 500);

     return () => {
       console.log('CLEANUP');
       clearTimeout(identifier);
     };
   }, [emailValid, passwordValid]);

  const emailChangeHandler = (event) => {
   // setEnteredEmail(event.target.value);
   dispatchEmail({type:'User-Input',val:event.target.value })

    //setFormIsValid(
      //event.target.value.includes('@') && passwordState.isValid
    //);
  };

  const passwordChangeHandler = (event) => {
    //setEnteredPassword(event.target.value);
    dispatchPassword({type:'User-Input',val:event.target.value })

   // setFormIsValid(
     // emailState.isValid && event.target.value.trim().length > 6
    //);
  };

  const validateEmailHandler = () => {
    //setEmailIsValid(emailState.isValid);
    dispatchEmail({type:'Input-Blur'})
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type:'Input-Blur'})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    ct.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
       <Input id="email" label='E-mail' type='email' onChange={emailChangeHandler}
       onBlur={validateEmailHandler}
       isValid={emailValid}
       value={emailState.value}
       ></Input>
        <Input id="password" label='Passord' type='password' onChange={passwordChangeHandler}
       onBlur={validatePasswordHandler}
       isValid={passwordValid}
       value={passwordState.value}
       ></Input>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
