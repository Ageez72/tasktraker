import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const SaveExpenseData = (SavedExpenseData) => {
    const expenseData = {
      ...SavedExpenseData,
      id: Math.random(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false); // to stopEditng after submission
  };
  const isEditingHandler = () => {
    setIsEditing("expenseForm");
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  let content;
  if (!isEditing) {
    content = <button onClick={isEditingHandler}>Add new expense</button>;
  } else {
    content = (
      <ExpenseForm
        onSaveExpenseData={SaveExpenseData}
        onStopEditing={stopEditingHandler}
      />
    );
  }
  return <div className="new-expense">{content}</div>;
};

export default NewExpense;
