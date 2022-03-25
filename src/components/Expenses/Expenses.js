import React, {useState} from "react";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import "./Expenses.css";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  let filterdExpenses = props.items.filter(filterdFunction);
  function filterdFunction(el) {
    let dates = new Date(el.date);
    return dates.getFullYear().toString() === filteredYear;
  }
  const onChangeHandler = (filterYear) => {
    setFilteredYear(filterYear);
  };
  const onClickDelete = (expenseId) => {
    props.onDeleteItem(expenseId);
  };
  // console.log(expensesContent);
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={onChangeHandler}
        />
        <ExpensesChart expenses={filterdExpenses} />
        <ExpensesList items={filterdExpenses} onDeleteItem={onClickDelete} />
      </Card>
    </div>
  );
};
export default Expenses;
