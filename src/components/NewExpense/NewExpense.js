import React,{useState} from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
const NewExpense=(props)=>{
    const[isEditing,setIsEdditing]=useState(false);
    const saveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEdditing(false);
    };
    const startEditingHandler=()=>{
        setIsEdditing(true);
    };
    const stopEditingHandler=()=>{
        setIsEdditing(false);
    };
    return(
        <div className="new-expense"> 
        {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
        {isEditing &&<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
        </div>
    )
}
export default NewExpense;