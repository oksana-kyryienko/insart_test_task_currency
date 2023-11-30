import { useEffect, useState } from 'react';
import useCurrencyStore from '../state/useCurrencyStore';

export const useCurrencyConverterLogic = () => {
  const [amount, setAmount] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState('UAH');
  const [result, setResult] = useState('');
  const [convertedResult, setConvertedResult] = useState('');
  const { currency } = useCurrencyStore();

  useEffect(() => {
    convertCurrency();
  }, [selectedCurrency]);

  const convertCurrency = () => {
    const numericAmount = parseFloat(amount);

    if (isNaN(numericAmount) || numericAmount <= 0) {
      setResult('Please enter a valid amount.');
      return;
    }

    if (!currency || !currency[0]) {
      setResult('Currency data is not available.');
      return;
    }

    const exchangeRate = Number(currency[1]?.buy);

    const convertedAmount =
      selectedCurrency === 'UAH'
        ? numericAmount / exchangeRate
        : numericAmount * exchangeRate;

    setResult(
      `${numericAmount} ${selectedCurrency} is equal to ${convertedAmount.toFixed(
        2
      )} ${selectedCurrency === 'UAH' ? 'CZK' : 'UAH'}`
    );

    setConvertedResult(convertedAmount.toFixed(2));
  };

  const switchCurrencies = () => {
    setSelectedCurrency((prevCurrency) =>
      prevCurrency === 'UAH' ? 'CZK' : 'UAH'
    );

    setAmount(convertedResult);
    setConvertedResult(amount);
  };

  return { 
    amount, 
    selectedCurrency, 
    result, 
    convertCurrency, 
    switchCurrencies, 
    setAmount, 
    setSelectedCurrency
  };
};
