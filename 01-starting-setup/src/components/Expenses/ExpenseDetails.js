import "./ExpenseItem.css";
import React,{ useState } from "react";


const ExpenseDetails=(props)=>{

  const[title,setTitle]=useState(props.title)
  
  const clickHandler=()=>{
   setTitle('updated')
  }

  const[amount,setAmount]=useState(props.amount)

  const amountHandler=()=>{
    setAmount(100);
  }
 


  return (
    <div className="expense-item__description">
      <h2>{title}</h2>
      <div className="expense-item__price">${amount}</div>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={amountHandler}>updateamount</button>
    </div>
  );
}

export default ExpenseDetails;
