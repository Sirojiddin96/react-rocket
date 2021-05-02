import ExpenseItem from "./ExpenseItem";
import Card from "../ui/Card";
import "./Expenses.css";
function Expenses(props) {
  return (
    <Card className="expenses">
      {props.items.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </Card>
  );
}

export default Expenses;
