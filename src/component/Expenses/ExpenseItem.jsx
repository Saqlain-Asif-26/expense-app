import React, { useState } from 'react'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {

  return (
    <Card className='px-2 flex flex-col sm:flex-row gap-1 items-center py-3 bg-[#34495e] mx-2'>
        <ExpenseDate date={props.date} />
        <div className='flex justify-between items-center w-full'>
            <h2 className='text-[1.25rem] sm:text-2xl font-semibold text-white'>{ props.title }</h2>
            <div className='border-2 border-white py-[0.5rem] px-[1.5rem] bg-purple-900 rounded-xl text-white font-bold text-[1.25rem] sm:text-xl'>${props.amount}</div>
        </div>
        
    </Card>
  )
}

export default ExpenseItem