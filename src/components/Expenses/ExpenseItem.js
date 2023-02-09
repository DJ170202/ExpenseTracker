//Our first compontent which contains Expense Items Info.
//RULE IN REACT - we cannot use more than one root(adjacent divs nhi chalenge) in funtion's return statement.(Parsing error: Adjacent JSX elements must be wrapped in an enclosing tag.)
// for ex - return <div><h2>ExpenseItem!</h2></div><div><h1>title</h1></div>
//Reason :- return statement me 1 se zyada chizen return nhi ho sakti, agar multiple chizen return karni h to wrap-up karo(array hi tarah visualize karo).
import "./ExpenseItem.css";
import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
//props means properties. Isse App.js file ka content share ho sakta h uski components me(here it is ExpenseItem).
function ExpenseItem(props) {
  //useState() is so called React Hook.
  // All the React hooks can be recognized by their name starting with - 'use'.
  //When our state changes, our component function is called again because of useState().
  //generally useState() is defined inside component function, not inside return statement or in any nested function(here in clickHandler())(except for 1 case).
  //useState(default_value)
  //What does useState() returns??
  //Ans) It returns an array containing 2 things:- 1) Access to the current_state value(with the help of a pointer) 2) function which we can call to assign new value to that variable.
  const [title, setTitle] = useState(props.title);
  //here we used 'const' because we are not directly changing value of title, we just use setTitle() and React takes care of it in backend.
  const clickHandler = () => {
    setTitle("Updated!");
    console.log(title);
  };
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item_description">
          <h2>{title}</h2>
          <div className="expense-item_price">{props.amount}</div>
        </div>
        {/* onClick is an eventlistner which is */}
        <button onClick={clickHandler}>Change Title!</button>
      </Card>
    </li>
  );
}
export default ExpenseItem;
