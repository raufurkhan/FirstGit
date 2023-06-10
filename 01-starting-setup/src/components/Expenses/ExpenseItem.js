import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
const ExpenseItem=(props)=> {

const deleteHandler=(e)=>{
e.target.parentElement.remove();
console.log(e.target.parentElement)
}
  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails title={props.title} amount={props.amount} />
      <div>{props.LocationOfExpenditure}</div>
      <button onClick={deleteHandler}>Delete</button>
    </Card>
    </li>
  );
}

export default ExpenseItem;
