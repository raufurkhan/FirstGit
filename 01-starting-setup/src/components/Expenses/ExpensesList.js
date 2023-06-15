import React from "react";
import  './ExpensesList.css'
import ExpenseItem from "./ExpenseItem";
const ExpensesList=(props)=>{

if(props.items.length===0){

    return <h2 className='expenses-list__fallback'> No expense found</h2>
}



return (
<ul className="expenses-list">
    {props.items.length===1 && <h2 className='expenses-list__fallback'>"Only single Expense here. Please add more..."</h2>}
    {console.log(props.items)};
{props.items.map((item) => (
      <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
        LocationOfExpenditure={item.LocationOfExpenditure}
      ></ExpenseItem>
    ))}
</ul>
)



}


export default ExpensesList;