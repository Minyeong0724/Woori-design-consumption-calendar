import { useState } from 'react';
import ExpenseModal from './ExpenseModal';
import { mockExpenses } from '../../mock/expenses.mock';

function ModalTestApp() {
  const [open, setOpen] = useState(true);

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
        date="2026.01.14"
        expenses={mockExpenses}
      />
    </div>
  );
}

export default ModalTestApp;
