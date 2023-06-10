import { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";

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
      <ExpensesList items={filteredExpenes} />
    </div>
  );
};
export default Expenses;
