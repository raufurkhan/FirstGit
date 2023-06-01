import React,{useStat} from "react"
import "./ExpenseForm.css" 

const ExpenseForm=()=>{

const [enteredTitle,setEnteredTitle]=useStat('')
const [enteredAmount,setEnteredAmount]=useStat('')
const [enteredDate,setEnteredDate]=useStat('')


const titleChangeHandler=(e)=>{
    setEnteredTitle(e.target.value)
}

const amountChangeHandler=(e)=>{

    setEnteredAmount(e.target.value)
}

const dateChangeHandler=(e)=>{
    setEnteredDate(e.target.value)
}
return(
<form>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" onChange={titleChangeHandler}></input>
          </div>

          <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" min=".01" step=".01"  onChange={amountChangeHandler}/>
          </div>

          <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min="2019-02-01" max="2022-02-01"  onChange={dateChangeHandler} />
          </div>
        </div>
        <div className="new-expense__actions">
            <button type='submit'>Add</button>
        </div>
      </form>


)

}

export default ExpenseForm;