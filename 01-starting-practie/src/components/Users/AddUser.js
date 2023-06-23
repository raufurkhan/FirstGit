import React ,{useState}from "react"
import Card from '../UI/Card'
import classes from './AddUser.module.css'
import Button from "../UI/Button"
import ErrorModal from "../UI/ErrorModal"

const AddUser=props=>{

    const[enteredUsername,setUsername]=useState('')
    const[enteredAge,setAge]=useState('')
   const[error,setError] =useState()



    const addSubmitHandler=(event)=>{
        event.preventDefault();
        if(enteredUsername.trim().length===0 || enteredAge.trim().length===0){
        setError({title:'invalid input',
    message:'enter correct name'})
        return;}
        if(+enteredAge<1){
        setError({title:'invalid age',
    message:'enter correct age'})
        return}
        props.onAddUser(enteredUsername,enteredAge)
        setUsername('')
        setAge('')
    }

    const addAgeHandler=(e)=>{
      setAge(e.target.value)
    }

    const addUserHandler=e=>{
        setUsername(e.target.value)
    }
    const errorHandler=()=>{
        setError(null)
    }
return (
    <div>
    {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
<Card className={classes.input}>
<form onSubmit={addSubmitHandler}>
<label htmlFor='username'>Name</label>
<input type='text' id='username'onChange={addUserHandler} value={enteredUsername}></input>
<label htmlFor='age'>Age</label>
<input type='number' id='age' onChange={addAgeHandler} value={enteredAge}></input>
<Button type='submit'> Add User</Button>
</form>
</Card>
</div>



)
}

export default AddUser;


