import React , {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2020, 2, 0),
  },
  {
    id: "e2",
    title: "Toilet Paper",
    amount: 50,
    date: new Date(2022, 2, 3),
  },
  {
    id: "e3",
    title: "Grocessory",
    amount: 500,
    date: new Date(2021, 2, 3),
  },
  {
    id: "e4",
    title: "Tour",
    amount: 1000,
    date: new Date(2029, 2, 5),
  },
];
const App = () => {
  const [expenses,setExpenses]=useState(DUMMY_EXPENSES);
  
  const addExpenseHandler=expense=>{
    setExpenses(prevExpenses=>{
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;