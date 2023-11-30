import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { CurrencyConverter } from './CurrencyConverter';
import { EditableCell } from './EditableCell';

jest.mock('../hooks/useCurrencyLogic', () => ({
  useCurrencyLogic: jest.fn(() => ({
    currency: [{ ccy: 'USD', base_ccy: 'UAH', buy: '27.5', sale: '28.0' }],
    loading: false,
    error: null,
    showError: false,
    handleSave: jest.fn(),
  })),
  useCurrencyConverterLogic: jest.fn(() => ({
    amount: 1,
    selectedCurrency: 'UAH',
    result: 'Result',
    convertCurrency: jest.fn(),
    switchCurrencies: jest.fn(),
    setAmount: jest.fn(),
    setSelectedCurrency: jest.fn(),
  })),
}));

describe('Currency Converter Component', () => {
  test('renders currency converter correctly', () => {
    render(<CurrencyConverter />);
    
    expect(screen.getByLabelText('Amount:')).toBeInTheDocument();
    expect(screen.getByLabelText('Currency:')).toBeInTheDocument();
    expect(screen.getByText('Convert')).toBeInTheDocument();
    expect(screen.getByText('Switch Currency')).toBeInTheDocument();
  });

});

describe('EditableCell Component', () => {
  test('renders editable cell correctly', () => {
    render(<EditableCell value="10" onSave={jest.fn()} />);
    
    expect(screen.getByText('10')).toBeInTheDocument();
  });

  test('allows editing when clicked', () => {
    render(<EditableCell value="10" onSave={jest.fn()} />);
    
    userEvent.click(screen.getByText('10'));
    expect(screen.getByRole('textbox')).toBeInTheDocument();

  
  });

});
