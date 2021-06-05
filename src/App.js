import React, { useState } from "react";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  { title: "Car Insurance", amount: 294.67, date: new Date(2019, 5, 2) },
  { title: "Toilet Paper", amount: 254.67, date: new Date(2021, 5, 1) },
  { title: "Marketing", amount: 274.67, date: new Date(2020, 4, 30) },
  { title: "Medicine", amount: 304.67, date: new Date(2019, 2, 2) },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    // setExpenses([expense, ...expenses]); // Adding new data to the first index
    setExpenses((prevExpenses) => {
      console.log(expense);
      return [expense, ...prevExpenses]; // Adding new expense data
    });
  };
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
