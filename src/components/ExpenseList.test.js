import React from 'react';
import { render } from '@testing-library/react';
import ExpenseList from './ExpenseList';

describe('ExpenseList', () => {
  it('should render a list of expenses', () => {
    const expenses = [
      { id: 1, name: 'Rent', amount: 1000 },
      { id: 2, name: 'Groceries', amount: 200 },
      { id: 3, name: 'Internet', amount: 50 },
    ];

    const { getByText } = render(<ExpenseList expenses={expenses} />);

    expenses.forEach((expense) => {
      const nameElement = getByText(expense.name);
      const amountElement = getByText(`$${expense.amount}`);

      expect(nameElement).toBeInTheDocument();
      expect(amountElement).toBeInTheDocument();
    });
  });
});