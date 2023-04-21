function ExpenseList(props) {
  const { expenses } = props;

  return (
    <div>
      <h2>Expense List</h2>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            <div>{expense.name}</div>
            <div>${expense.amount}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;