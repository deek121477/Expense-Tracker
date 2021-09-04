import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
const [isEditing,setIsEditing]=useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) =>
    {
        const expenseData={
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        //console.log(expenseData); its Alterative down given
        props.onAddExpense(expenseData);
    };

const startEditingHandler=()=>
{
setIsEditing(true);
};
const stopEditinghandler=()=>{
    setIsEditing(false);
};
    return (
    <div className='new-expense'>
    {!isEditing &&   <button onClick={startEditingHandler}>Add New Expense</button>}
   {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditinghandler}/>}
</div>
); 
};
export default NewExpense;