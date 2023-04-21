import './ExpenseList.css';


function ExpenseList(props) {
  const { expenses } = props;

  return (
    <div className='expense-list'>
      <h2>Expense List</h2>
      <ul className='expense-list__list'>
        {expenses.map((expense) => (
          <li key={expense.id} className='expense-list__item'>
            <div className='expense-list__name'>{expense.name}</div>
            <div className='expense-list__amount'>${expense.amount}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;