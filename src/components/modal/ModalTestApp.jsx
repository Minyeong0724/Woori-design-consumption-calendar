import { useState } from 'react';
import ExpenseModal from './ExpenseModal';
import { dummyData } from '../../mock/expenses.mock';

function ModalTestApp() {
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState({
  year: 2026,
  month: 1,
  day: 14,
});
  const dateLabel = `${selectedDate.year}.${String(selectedDate.month).padStart(2,'0')}.${String(selectedDate.day).padStart(2,'0')}`;

  
  const dailyExpenses = dummyData.filter(item =>
  item.year === selectedDate.year &&
  item.month === selectedDate.month &&
  item.day === selectedDate.day
  );
 const groupedExpenses = Object.values(
    dailyExpenses.reduce((acc, item) => {
      if (!acc[item.title]) {
        acc[item.title] = {
          title: item.title,
          total: 0,
        };
      }
       acc[item.title].total += item.price;
      return acc;
    }, {})
  );

  return (
    <div className="p-6">
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        모달 열기
      </button>

      <ExpenseModal
        isOpen={open}
        onClose={() => setOpen(false)}
        date={dateLabel}
        expenses={groupedExpenses}
      />
    </div>
  );
}

export default ModalTestApp;
