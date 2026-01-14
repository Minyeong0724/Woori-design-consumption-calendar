import { useState } from 'react';
import Calendar from './components/consumptions/Calendar';
import ExpenseModal from './components/modal/ExpenseModal';
import { dummyData } from './mock/expenses.mock';
console.log('dummyData:', dummyData);

function App() {
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDayClick = (day) => {
    if (!day) return;

    setSelectedDate({
      year: 2026,
      month: 1,
      day,
    });
    setOpen(true);
  };

  const dailyExpenses = dummyData.filter(item =>
    selectedDate &&
    item.year === selectedDate.year &&
    item.month === selectedDate.month &&
    item.day === selectedDate.day
  );

 const groupedDailyExpenses = Object.values(
  dailyExpenses.reduce((acc, item) => {
    const key = item.title;

    if (!acc[key]) {
      acc[key] = {
        id: key,                 // daily처럼 id
        title: item.title,
        price: 0,                // ⭐ total 대신 price
        year: item.year,
        month: item.month,
        day: item.day,
      };
    }

    acc[key].price += item.price;
    return acc;
  }, {})
);


  

  return (
    <div className="p-4">
      {/* ✅ 달력은 항상 보인다 */}
      <Calendar
        year={2026}
        month={1}
        expense={dummyData}
        onDayClick={handleDayClick}
      />

      {/* ✅ 모달은 조건부 */}
      <ExpenseModal
        isOpen={open}
        onClose={() => setOpen(false)}
        date={
          selectedDate
            ? `${selectedDate.year}.${String(selectedDate.month).padStart(2,'0')}.${selectedDate.day}`
            : ''
        }
        expenses={groupedDailyExpenses}
      />
    </div>
  );
}

export default App;
