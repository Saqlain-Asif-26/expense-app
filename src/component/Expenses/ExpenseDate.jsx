import React from 'react'

const ExpenseDate = (props) => {
    const month = props.date.toLocaleString('en-US',{month: 'long'});
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString('en-US',{day: '2-digit'});
  return (
    <div>
        <div className='text-nowrap mr-4 flex flex-col justify-center items-center leading-2 border-[1px] border-gray-900 bg-[#4a637a] text-white w-[5.5rem] h-[5.5rem] gap-1 px-2 rounded-md'>
            <div className='font-bold text-[0.9rem]'>{day}</div>
            <div className='font-bold text-[0.9rem]'>{month}</div>
            <div className='text-[0.9rem]'>{year}</div>
        </div>
    </div>
  )
}

export default ExpenseDate