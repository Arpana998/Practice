import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const[enteredtitle, setenteredTitle] = useState('')
  const[enteredamount, setenteredAmount] = useState('')
  const[entereddate, setenteredDate] = useState('')

  const nameChangeHandler = (event) => {
    setenteredTitle(event.target.value)
    
  }

  const amountChangeHandler = (event) => {
    setenteredAmount(event.target.value)
    
  }

  const dateChangeHandler = (event) => {
    setenteredDate(event.target.value)
    
  }

  const submitHandler = (event) =>{
    event.preventDefault();

    const userInput = {
      title: enteredtitle,
      amount: enteredamount,
      date: new Date(entereddate)
    }
    props.onSaveExpenseData(userInput)
    setenteredTitle('')
    setenteredAmount('')
    setenteredDate('')

  }
  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={enteredtitle} onChange={nameChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' value={enteredamount} onChange={amountChangeHandler} min='0.01' step='0.01' />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' value={entereddate}onChange={dateChangeHandler} min='2019-01-01' max='2022-12-31' />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={props.disconnect}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;