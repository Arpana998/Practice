import { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

  const [toBeEdited, setToBeEdited] = useState(false);

  const FormToBeShown = () => {
    setToBeEdited(true)
  }

  const cancelEditing = () => {
    setToBeEdited(false);
  }

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const userInput = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(userInput);
    setToBeEdited(false);
  }

  
  return (
    <div className='new-expense'>
      {!toBeEdited && <button onClick={FormToBeShown}>Add New Expense.</button>}
      {toBeEdited && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} disconnect={cancelEditing}/>}
    </div>
  );
};

export default NewExpense;