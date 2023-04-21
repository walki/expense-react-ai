import { useState } from 'react';
import AddExpenseForm from './components/AddExpenseForm'
import ExpenseList from './components/ExpenseList'
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);

  function addExpense(newExpense) {
    setExpenses([...expenses, newExpense]);
  }

  return (
    <div>
      <ExpenseList expenses={expenses} />
      <AddExpenseForm onSubmit={addExpense} />
    </div>
  );
}

export default App;
