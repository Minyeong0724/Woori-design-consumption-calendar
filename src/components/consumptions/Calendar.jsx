import React from 'react'
import CalenderDaily from './CalendarDaily';


const Calendar = ({ todayDate, expense }) => {
    
    const monthList = Array.from({length: 31}, (_, i) => i+1);
    
    const y = String(todayDate.year);
    const m = String(todayDate.month).padStart(2, "0");
    const d = "01";
    const getFirstWeekCode = new Date(y-m-d).getDay();

    const gapDays = Array.from({length: getFirstWeekCode}, (_, i) => 0);

    const mergedMonth = [...gapDays, ...monthList]; //정상

    const dailys = mergedMonth.map((day) => {
        
        const key = crypto.randomUUID();
        const checkDay = (day == 0) ? " " : day;
        
        const price = expense.reduce((sum, e) => {
            if (todayDate.year === e.year && todayDate.month === e.month && day === e.day) {
                return sum + e.price;
            }
            return sum;
        }, 0);
        
        return <CalenderDaily day={checkDay} key={key} price={price === 0 ? " ": price} onClick={()=>onDayClick(day)}/>
    });
    
  return (
    <div className='grid-cols-7 grid h-full max-h-96 min-h-64 rounded-md bg-gray'>
        <a>일</a>
        <a>월</a>
        <a>화</a>
        <a>수</a>
        <a>목</a>
        <a>금</a>
        <a>토</a>
        {dailys}
    </div>
  )
}

export default Calendar