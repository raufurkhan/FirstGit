import { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectYear) => {
    setFilteredYear(selectYear);
  };
  const arr = props.items;
  const filteredExpenes = arr.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });


  return (
    <div>
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      ></ExpenseFilter>
      <ExpensesChart expenses={filteredExpenes}/>
      <ExpensesList items={filteredExpenes} />
    </div>
  );
};
export default Expenses;
