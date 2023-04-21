import React from 'react';
import { render, screen  } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it(' should render an expense list', () => {
    render(<App />);
    const listElement = screen.getByText(/Expense List/i);
    expect(listElement).toBeInTheDocument();
  });

  it(' should render a form to add expenses', () => {
    render(<App />);
    const formElement = screen.queryByText(/Add Expense/i);
    expect(formElement).toBeInTheDocument();
  });
});
