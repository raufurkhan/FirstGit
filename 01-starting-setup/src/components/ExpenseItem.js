import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'
function ExpenseItem(props){


return( 
<div className="expense-item">
<ExpenseDate date={props.date}/>
<ExpenseDetails title={props.title} 
 amount={props.title}
/>
    <div>{props.LocationOfExpenditure}</div>
</div>)
}


export default ExpenseItem