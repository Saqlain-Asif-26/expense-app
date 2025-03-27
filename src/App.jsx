import React, { useState } from 'react'
import Expenses from './component/Expenses/Expenses'
import NewExpense from './component/NewExpenses/NewExpense'

let DUMMY_EXPENSE = [
  {
    id: 'e1',
    title: 'School Fee',
    amount: 250,
    date: new Date(1998, 3, 17)
  },
  {
    id: 'e2',
    title: 'Books',
    amount: 230,
    date: new Date(2006, 0, 6)
  },
  {
    id: 'e3',
    title: 'House Rent',
    amount: 700,
    date: new Date(2024, 1, 21)
  },
  {
    id: 'e4',
    title: 'Foods',
    amount: 540,
    date: new Date(2024, 8, 23)
  }
]

const App = () => {

  const [expenses, setExpense] = useState(DUMMY_EXPENSE);

  const addExpenseHandler = (Expense) => {
    const updatedExpense = [Expense, ...expenses]
    setExpense(updatedExpense)
  }

  return (
    <div className='cursor-default grid gap-2 justify-center overflow-auto'>
      <h1 className='font-bold text-2xl px-6 py-2 text-gray-200'>Let's take a brief count on all expensions :-)</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  )
}

export default App