import "./ExpenseForm.css";
import { useState } from "react";
const ExpenseForm = (props) => {
  //here we are using useState() to store the  value of title entered by user for future references.
  //instead of calling three useState(),we can pass an object for the same.
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  //object is given as input to useState().
  // const [userInput,setUserInput] = useState({
  //     enteredTitle:'',
  //     enteredAmount:'',
  //     enteredDate:'',
  // });
  const titleChangeHandler = (event) => {
    //console.log(event.target.value);
    setEnteredTitle(event.target.value);
    //using spread operator to ensure that values of title, amount, date and they don't get lost.
    // setUserInput({
    //     ...userInput,
    //     enteredTitle: event.target.value,
    // });
    //upper wale ki jagah hum ye use karenge becoz neeche wala multiple states updates me hamesha sahi ans dega.
    // setUserInput(prevState => {
    //     return {...prevState, enteredTitle: event.target.value}/*in more general way, return{...prevState, ...updatedValues} */
    // });
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredAmount: event.target.value,
    // });
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredDate: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    //object of submitted data.
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  const cancelHandler = () => {
    props.onCancel();
  };
  return (
    //you might be wondering why did onSubmit is not used in the submit tag??
    //Answer) submit is an event which acts on the whole form, so whole form is affected.
    <form onSubmit={submitHandler}>
      <div className="new-expense__control">
        <div className="new-expense__control">
          <label>Title</label>
          {/* adding value ensures 2-way binding.
          means: On submit not only input is read and stored in useState() but after submitting
          , state is changing and at that time we set the input values(here title, amount , date) to the values by submitHandler()(in this case all are set to empty at the end). */}
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          value={enteredAmount}
          onChange={amountChangeHandler}
        />
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input
          type="date"
          min="2019-01-01"
          step="2022-12-31"
          value={enteredDate}
          onChange={dateChangeHandler}
        />
      </div>      
      <div className="new-expense__actions">
        <button type="button" onClick = {cancelHandler}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
