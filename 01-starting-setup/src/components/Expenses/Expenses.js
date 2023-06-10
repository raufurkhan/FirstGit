import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";

const Expenses=(props)=>{
 const[filteredYear,setFilteredYear]= useState('2020')
const filterChangeHandler= selectYear =>{
  setFilteredYear(selectYear)
}
  const arr = props.items;
  const filteredExpenes= arr.filter((expense)=>{
    return expense.date.getFullYear().toString()===filteredYear
  })
  
    return (
      <div>
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpenseFilter>
        { filteredExpenes.map((item) => (
        <ExpenseItem
        key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
          LocationOfExpenditure={item.LocationOfExpenditure}
        ></ExpenseItem>
))}
      </div>
    );
  
}
export default Expenses;
