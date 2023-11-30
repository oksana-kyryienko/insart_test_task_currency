import React from 'react';
import { useCurrencyConverterLogic } from '../hooks/useCurrencyConvertorLogic';

export const CurrencyConverter = () => {
  const {
    amount,
    selectedCurrency,
    result,
    convertCurrency,
    switchCurrencies,
    setAmount,
    setSelectedCurrency,
  } = useCurrencyConverterLogic();

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <label style={{ marginRight: '10px', marginBottom: '10px' }}>
            Amount:
            <input
              type="number"
              className="form-control"
              style={{ marginLeft: '3px' }}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              min="0"
            />
          </label>
          <label style={{ marginLeft: 'auto', marginBottom: '10px' }}>
            Currency:
            <select
              value={selectedCurrency}
              className="form-control"
              style={{ marginLeft: '3px' }}
              onChange={(e) => setSelectedCurrency(e.target.value)}
            >
              <option value="UAH">UAH</option>
              <option value="CZK">CZK</option>
            </select>
          </label>
          <button
            className="btn btn-primary"
            style={{ marginLeft: '10px' }}
            onClick={convertCurrency}
          >
            Convert
          </button>
          <button
            className="btn btn-secondary"
            style={{ marginLeft: '10px' }}
            onClick={switchCurrencies}
          >
            Switch Currency
          </button>
          {result && (
            <div className="mt-1 alert alert-success" role="alert">
              {result}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};