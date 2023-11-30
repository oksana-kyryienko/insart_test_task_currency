import React  from 'react';
import { useCurrencyLogic } from '../hooks/useCurrencyLogic';
import { EditableCell } from './EditableCell';
import { CurrencyConverter } from './CurrencyConverter';

export const Currency: React.FC = () => {
  const { currency, loading, error, showError, handleSave
  } = useCurrencyLogic();

  if (showError) {
    return (
      <div className="alert alert-danger mt-4" role="alert">
        Error on the 5th request
      </div>
    );
  }

  if (loading || !currency) {
    return <div className="alert alert-info mt-4" role="alert">Loading...</div>;
  }

  if (error) {
    return (
      <div className="alert alert-danger mt-4" role="alert">
        Error: {error}
      </div>
    );
  }
  if (!Array.isArray(currency) || currency.length === 0) {
    return <div className="alert alert-warning mt-4" role="alert">Unexpected data format</div>;
  }
  return (
    <div className="container">
      <h1 className="mb-4">Currency Converter</h1>
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Currency</th>
            <th>Buy</th>
            <th>Sell</th>
          </tr>
        </thead>
        <tbody>
          {currency.map((rate) => (
            <tr key={rate.ccy}>
              <td>
                {rate.ccy}/{rate.base_ccy}
              </td>
              <td>
                <EditableCell
                  value={rate.buy}
                  onSave={(value) => handleSave(value, rate.buy, 'buy', rate)}
                />
              </td>
              <td>
                <EditableCell
                  value={rate.sale}
                  onSave={(value) => handleSave(value, rate.sale, 'sale', rate)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <CurrencyConverter />
    </div>
  );
};


