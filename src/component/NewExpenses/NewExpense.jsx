import React from 'react'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const ExpenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        props.onAddExpense(ExpenseData)
   
    }

  return (
    <div className='new-expense bg-[#a892ee] p-4 m-[1rem auto] mx-auto w-[50rem] max-w-[95%] rounded-xl text-center shadow-gray-950 shadow-xl'>
        <ExpenseForm onSaveExpenseData={ saveExpenseDataHandler } />
    </div>
  )
}

export default NewExpense