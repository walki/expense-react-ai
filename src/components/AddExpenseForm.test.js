import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import AddExpenseForm from './AddExpenseForm';


describe('AddExpenseForm', () => {
  it('should call onSubmit with the correct expense when the form is submitted', () => {
    const onSubmit = jest.fn();

    const { getByLabelText, getByText } = render(<AddExpenseForm onSubmit={onSubmit} />);

    const nameInput = screen.getByLabelText('Name:');
    const amountInput = screen.getByLabelText('Amount:');
    const submitButton = screen.getByText('Enter');

    fireEvent.change(nameInput, { target: { value: 'Rent' } });
    fireEvent.change(amountInput, { target: { value: '1000' } });
    fireEvent.click(submitButton);

    expect(onSubmit).toHaveBeenCalledWith({ id: expect.any(Number), name: 'Rent', amount: 1000 });
  });
});