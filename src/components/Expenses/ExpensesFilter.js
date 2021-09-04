import React from 'react';
import './ExpensesFilter'

const ExpensesFilter = (props) =>{
const dropDownChangeHandler=(event)=>{
   props.onChangeFilter(event.target.value);
};
 return (
     <div className="expenses-filter">
         <div className="expenses-filter__control">
             <label className='expenses-list__fallback'>Filter By Date</label>
             <select   value={props.selected} onChange={dropDownChangeHandler}>
             
             <option value="2017" >2017</option >
                 <option value="2018" >2018</option >
                 <option value="2019" >2019</option >
                 < option value="2020">2020</option >
                 < option value="2021">2021</option >
             </select>

         </div>
     </div>

 );

};

export default ExpensesFilter;