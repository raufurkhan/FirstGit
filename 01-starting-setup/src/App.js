

import ExpenseItem from "./components/ExpenseItem";

const expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
    LocationOfExpenditure: 'Mumbai'
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
    LocationOfExpenditure: 'Kanpur'
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
    LocationOfExpenditure: 'Noida'
  },
];


function App() {
  
  return expenses.map((item)=>{
  return (
    
    <div>
      <h2>Let's get started!</h2>
  
      <ExpenseItem title={item.title}
      amount={item.amount}
      date={item.date}
      LocationOfExpenditure={item.LocationOfExpenditure}
      >
      </ExpenseItem>
      
     
    </div>
  )
})
}
export default App;
