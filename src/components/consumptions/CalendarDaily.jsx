import React from 'react'

const CalendarDaily = ({ day, price }) => {
  
  return (
    <div className='p-2.5 w-full h-full content-between truncate justify-center grid'>
        <p>{day}</p>
        <p>{(day === ' ') ? ' ' : price}</p>
    </div>
  )
}

export default CalendarDaily