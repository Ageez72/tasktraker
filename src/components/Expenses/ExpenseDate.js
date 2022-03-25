import "./ExpenseDate.css";
const ExpenseDate = (props) => {
  let dates = new Date(props.date);
  const month = dates.toLocaleString("en-US", {month: "long"});
  const day = dates.toLocaleString("en-US", {day: "2-digit"});
  const year = dates.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
