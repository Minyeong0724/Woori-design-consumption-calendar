import Header from './components/consumptions/Header';
import Calendar from './components/consumptions/Calendar';
import Layout from './components/layout/Layout';
import ModalTestApp from './components/modal/ModalTestApp';
import { dummyData } from './mock/expenses.mock';
import { useState } from 'react';


function App() {
    const todayDate = {year: 2026, month: 1, day: 14};
    
    const [date, setDate] = useState(todayDate);
    
    const changeDate = (selectedMonth) => {
        const newDate = {...date,year: selectedMonth.getFullYear(),month: selectedMonth.getMonth()+1};
        setDate(newDate);
    }
    return ( 
        <Layout>
            <Header onChange={changeDate}/>
            <Calendar todayDate={date} expense={dummyData}/>
        </Layout>
    )
}

export default App
