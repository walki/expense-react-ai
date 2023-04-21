import { useState } from "react";


function AddExpenseForm(props) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const newExpense = {
      id: Date.now(),
      name: name,
      amount: parseFloat(amount),
    };

    props.onSubmit(newExpense);

    setName('');
    setAmount('');
  }

  return (
    <div>
      <h2>Add Expense</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Amount:
          <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </label>
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
}

export default AddExpenseForm;