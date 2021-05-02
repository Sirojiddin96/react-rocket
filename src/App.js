import Expenses from "./components/expenses/Expenses";

const App = () => {
  const expenses = [
    { title: "Car Insurance", amount: 294.67, date: new Date(2021, 5, 2) },
    { title: "Toilet Paper", amount: 254.67, date: new Date(2021, 5, 1) },
    { title: "Marketing", amount: 274.67, date: new Date(2021, 4, 30) },
    { title: "Medicine", amount: 304.67, date: new Date(2021, 2, 2) },
  ];
  return (
    <div className="App">
      <h1>Let's get Started</h1>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
