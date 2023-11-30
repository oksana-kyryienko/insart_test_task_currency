import { CurrencyExchangeRate } from '../types/CurrencyExchange';

export const getCurrency = (): Promise<CurrencyExchangeRate[]> => {
  return import('../api/currency.json')
    .then((module) => module.default)
    .catch((error) => {
      console.error('Error fetching local data:', error);
      throw error;
    });
};
