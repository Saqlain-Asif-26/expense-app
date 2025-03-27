import React from 'react'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
const Expenses = (props) => {
  return (
    <Card className='grid gap-2 p-4 bg-gray-800 mx-auto my-5 w-[50rem] max-w-[95%]'>
      {
        props.item.map(
          expense => (
            <ExpenseItem date={expense.date} title={expense.title} amount={expense.amount} />
          )
        )
      }
    </Card>
  )
}

export default Expenses