import React from 'react'

const CalendarDaily = ({ day, price, onClick }) => {
  if(!day)return <div/>;
  return (
    <div onClick={onClick} className='p-2.5 w-full h-full content-between truncate justify-center grid'>
        <p className='content'>{day}</p>
        <p className='self-end'>{(day === ' ') ? ' ' : price}</p>

    </div>
  )
}

export default CalendarDaily