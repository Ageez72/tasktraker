import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import {ReactComponent as Trash} from "../../imgs/trash.svg";
const ExpenseItem = (props) => {
  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };
  return (
    <Card className="expense-item ">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price ">${props.amount}</div>
        <Trash className="trashIcon" onClick={deleteHandler} />
      </div>
    </Card>
  );
};
export default ExpenseItem;
