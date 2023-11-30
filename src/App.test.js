import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { App } from './App';

jest.mock('./hooks/useCurrencyLogic', () => ({
  useCurrencyLogic: jest.fn(() => ({
    currency: [{ ccy: 'USD', base_ccy: 'UAH', buy: '27.5', sale: '28.0' }],
    loading: false,
    error: null,
    showError: false,
    handleSave: jest.fn(),
  })),
}));

describe('App Component', () => {
  test('renders App component correctly', () => {
    render(<App />);
    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });
});
