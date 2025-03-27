import React, { useState } from 'react'

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");
    
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)  
        }

        props.onSaveExpenseData(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

  return (
    <form onSubmit={ submitHandler }>
        <div className='new-expense__controls flex flex-wrap gap-4 mb-4 text-left'>
            <div className='new-expense__control'>
                <label className='font-bold mb-2 block'>Title</label>
                <input onChange={ titleChangeHandler } value={enteredTitle} className='outline-none text-inherit p-2 rounded-md border-[1px] border-white w-80 max-w-full' type="text" />
            </div>
            <div className='new-expense__control'>
                <label className='font-bold mb-2 block'>Amount</label>
                <input onChange={ amountChangeHandler } value={enteredAmount} className='outline-none text-inherit p-2 rounded-md border-[1px] border-white w-80 max-w-full' type="number" min="0.01" step="0.01" />
            </div>
            <div className='new-expense__control'>
                <label className='font-bold mb-2 block'>Date</label>
                <input onChange={ dateChangeHandler } value={enteredDate} className='outline-none text-inherit p-2 rounded-md border-[1px] border-white w-80 max-w-full' type="date" />
            </div>
        </div>
        <div className='new-expense__actions text-right'>
            <button className='px-6 py-3 bg-purple-900 rounded-xl font-semibold text-white' type='submit'>Add Expense</button>
        </div>
    </form>
  )
}

export default ExpenseForm