import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 0,
    title: "Car Insurance",
    amount: 220.54,
    date: `2022, 2, 2`,
  },
  {
    id: 1,
    title: "Electricity",
    amount: 290.72,
    date: `2021, 2, 8`,
  },
  {
    id: 2,
    title: "Food",
    amount: 250.5,
    date: `2022, 4, 20`,
  },
  {
    id: 3,
    title: "Household",
    amount: 100.32,
    date: `2021, 8, 28`,
  },
];
const App = () => {
  const [expense, setExpenses] = useState(
    localStorage.getItem("expenses")
      ? JSON.parse(localStorage.getItem("expenses"))
      : DUMMY_EXPENSES
  );
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      const data = [expense, ...prevExpenses];
      localStorage.setItem("expenses", JSON.stringify(data));
      return data;
    });
  };
  const deleteExpenseHandler = (expenseID) => {
    console.log(expenseID);
    setExpenses((prevExpenses) => {
      const data = prevExpenses.filter((expense) => expense.id !== expenseID);
      localStorage.setItem("expenses", JSON.stringify(data));
      return data;
    });
  };
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expense} onDeleteItem={deleteExpenseHandler} />
    </div>
  );
};

export default App;
