import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";


function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const changeFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((element) => {
    return element.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>No Expenses Found.</p>;

  if (filteredExpenses.length === 1) {
    expensesContent = filteredExpenses.map((expense) => (
      <div>
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
      <p>only single expense here, please add more expenses..</p>
      </div>
      
      
    ));
  }

  if (filteredExpenses.length > 1) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={changeFilterHandler}
      />
      <ExpensesChart expenses={filteredExpenses}/>
      {expensesContent}
    </Card>
  );
}

export default Expenses;
