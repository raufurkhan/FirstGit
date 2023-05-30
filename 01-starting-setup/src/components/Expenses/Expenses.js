import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";

import "./Expenses.css";

const Expenses=(props)=>{
  const arr = props.items;
  return arr.map((item) => {
    return (
      <div>
        <ExpenseItem
          title={item.title}
          amount={item.amount}
          date={item.date}
          LocationOfExpenditure={item.LocationOfExpenditure}
        ></ExpenseItem>
      </div>
    );
  });
}
export default Expenses;
