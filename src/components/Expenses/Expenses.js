import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

const Expenses = (props)=> {
//const filterChangeHandler=selectedYear=>{
 // console.log('Expenses.js');
 // console.log(selectedYear);
//};
const [filteredYear,setFilteredYear]=useState('2020');
const filterChangeHandler=selectedYear =>
{
  setFilteredYear(selectedYear)

};
const filteredExpenses=props.items.filter(expense=>{
  return expense.date.getFullYear().toString()===filteredYear;
});


return (
    
    
      <div>
    <Card className='expenses'>
      <ExpensesFilter
      selected={filteredYear}
    onChangeFilter={filterChangeHandler}
    />
    <ExpensesChart expenses={filteredExpenses}/>
<ExpensesList items={filteredExpenses}/>
    </Card>
  </div>

  );
};

export default Expenses;

//{/* <Card className="expenses"> {/* <ExpensesFilter className="expense-filteryear" selected={filteredYear} onChangeFilter={filterChangeHandler}/> */}
    