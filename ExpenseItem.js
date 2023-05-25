import './ExpenseItem.css'

function ExpenseItem(){
const expenseDate=new Date(2022,2,21);
const expenseTitle='Car Inurance'
const expenseAmount=898
const LocationOfExpenditure="Mumbai"




return( 
<div className="expense-item">
<div>{expenseDate.toISOString()}</div>
<div className="expense-item__description">
    <h2>{expenseTitle}</h2>
    <div className="expense-item__price">{expenseAmount}</div>
    </div>
    <div>{LocationOfExpenditure}</div>
</div>)
}


export default ExpenseItem