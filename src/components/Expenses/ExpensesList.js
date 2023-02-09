import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';
const ExpensesList = props =>{  
  if(props.items.length === 0){
    return <h2 className='expenses-list__fallback'>OOPS!....Found No Expenses!</h2>
  }
  return <ul className="expenses-list">
    {props.items.map(expense => (
      <ExpenseItem
        //key is a type prop which can be used anywhere whether it be any custom component of buildIn HTML tag.
        //key represents the unique id for each list item in this case.
        //jab bhi list of items ko map karna ho to key ka use karen
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))}
  </ul>;
};
export default ExpensesList;