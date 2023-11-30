import { CurrencyExchangeRate } from '../types/CurrencyExchange';
import { useServerData } from './useServerData';

export const useCurrencyLogic = () => {
  const { currency, loading, showError, mutate } = useServerData();

  const handleSave = (
    value: string,
    initialValue: string,
    setValue: string,
    rate: CurrencyExchangeRate
  ) => {
    try {
      const newValue = parseFloat(value);
      if (!isNaN(newValue) && currency) {
        const allowedRange = 0.1 * parseFloat(initialValue);

        if (
          newValue >= parseFloat(initialValue) - allowedRange &&
          newValue <= parseFloat(initialValue) + allowedRange
        ) {
          console.log(`Save value: ${newValue}`);
          const updatedData = currency.map((item) =>
            item.ccy === rate.ccy
              ? {
                ...item,
                [setValue]: value,
              }
              : item
          );
          mutate(updatedData, false);
        } else {
          console.log(
            'Invalid value. Value must be within ±10% of the initial currency value.'
          );
        }
      } else {
        console.log('Invalid input. Please enter a valid number.');
      }
    } catch (error) {
      console.error('Error handling save:', error);
    }
  };

  return {
    currency,
    loading,
    showError,
    handleSave,
    error: null,
  };
};
