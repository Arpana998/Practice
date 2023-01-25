import { useState } from 'react'
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020")

  const changeFilterHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter(element => {
    return element.date.getFullYear().toString() === filteredYear;
  })

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={changeFilterHandler}/>
      {filteredExpenses.map(expense => <ExpenseItem key= {expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>)}
    </Card>
  );
}

export default Expenses;
