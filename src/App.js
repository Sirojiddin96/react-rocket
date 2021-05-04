import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    { title: "Car Insurance", amount: 294.67, date: new Date(2021, 5, 2) },
    { title: "Toilet Paper", amount: 254.67, date: new Date(2021, 5, 1) },
    { title: "Marketing", amount: 274.67, date: new Date(2021, 4, 30) },
    { title: "Medicine", amount: 304.67, date: new Date(2021, 2, 2) },
  ];
  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
  };
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
