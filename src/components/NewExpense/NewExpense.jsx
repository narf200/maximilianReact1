import React from 'react';
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    const saveExpanseDataHandler = (enteredExpanseDate)=> {
        const expanseDate = {
            ...enteredExpanseDate,
            id: Math.random().toString()
        };
        props.onAddExpanse(expanseDate);
    };

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpanseDate={saveExpanseDataHandler}/>
        </div>
    )
};

export default NewExpense;
