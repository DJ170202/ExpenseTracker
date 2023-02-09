//App.js is a REACT component. This is a special type of component. A component is just a JS function.

import "./App.css";
import { useState } from "react";
//this(./components/ExpenseItem) can be understood as, Import from components folder, and inside that ExpenseItem file where . (./) means residing in same folder in which there is App.js is.
//Now we can just use this like an HTML element.
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Wall Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { 
    id: "e2",
    title: "New TV", 
    amount: 799.49, 
    date: new Date(2021, 2, 12) 
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    //this is JSX code because inside javascript there is html.
    //This is made to make development easier for developer. This code first gets converted into browser friendly code by REACT (which is difficult to write by developer) and then rendered on browser.
    //this shows the declarative nature of REACT.
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
