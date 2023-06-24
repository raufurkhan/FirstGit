import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";



const AddUser = (props) => {
  const nameInputref = useRef();
  const ageRef = useRef();

  const [error, setError] = useState();

  const addSubmitHandler = (event) => {
    const enteredNameRef=nameInputref.current.value
    const enteredAgeRef=ageRef.current.value
    event.preventDefault();
    if (enteredNameRef.trim().length === 0 || enteredAgeRef.trim().length === 0) {
      setError({ title: "invalid input", message: "enter correct name" });
      return;
    }
    if (+enteredAgeRef < 1) {
      setError({ title: "invalid age", message: "enter correct age" });
      return;
    }
    props.onAddUser(enteredNameRef, enteredAgeRef);
    nameInputref.current.value=''
    ageRef.current.value=''
  };


  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addSubmitHandler}>
          <label htmlFor="username">Name</label>
          <input
            type="text"
            id="username"
            ref={nameInputref}
          ></input>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            ref={ageRef}
          ></input>
          <Button type="submit"> Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
