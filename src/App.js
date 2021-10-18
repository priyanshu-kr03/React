import React from "react";
import Expenses from "./components/Expenses/Expenses";
const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 0),
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
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
