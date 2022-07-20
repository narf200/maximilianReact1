import React, {useState} from 'react';
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveExpanseDataHandler = (enteredExpanseDate)=> {
        const expanseDate = {
            ...enteredExpanseDate,
            id: Math.random().toString()
        };
        props.onAddExpanse(expanseDate);
    };

    const startEditingHandler = () => {
        setIsEditing(true)
    }
    const stopEditingHandler = () => {
        setIsEditing(false)
    }

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm stopEditingHandler={stopEditingHandler} onSaveExpanseDate={saveExpanseDataHandler}/>}
        </div>
    )
};

export default NewExpense;
