import React from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {
  const nameChangeHandler = (event) => {
    console.log(event.target.value)
  }

  const amountChangeHandler = (event) => {
    console.log(event.target.value)
  }

  const dateChangeHandler = (event) => {
    console.log(event.target.value)
  }
  return (
    <form>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' onChange={nameChangeHandler}/>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' onChange={amountChangeHandler} min='0.01' step='0.01' />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' onChange={dateChangeHandler} min='2019-01-01' max='2022-12-31' />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;