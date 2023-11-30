import { useEffect, useState } from 'react';
import { getCurrency } from '../services/getCurrency';
import useCurrencyStore from '../state/useCurrencyStore';
import useSWR from 'swr';

export const useServerData = () => {
  const {
    data: currency,
    error: fetchError,
    mutate,
    isValidating,
  } = useSWR('../api/currency.json', getCurrency);

  const { loading, error: storeError, fetchCurrency } = useCurrencyStore();
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    try {
      if (fetchError || storeError) {
        console.error('Server error:', fetchError || storeError);
        setShowError(true);
        return;
      }

      if (isValidating) {
        return;
      }

      const requestCounter = localStorage.getItem('requestCounter');
      const counter = requestCounter ? parseInt(requestCounter, 10) + 1 : 1;

      if (counter % 5 === 0) {
        console.log('Imitating server error on the 5th request');
        localStorage.setItem('requestCounter', '0');
        fetchCurrency();
        setShowError(true);
        return;
      }

      localStorage.setItem('requestCounter', counter.toString());
      fetchCurrency();
      setShowError(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, [fetchCurrency, fetchError, isValidating, storeError]);

  return { currency, loading, showError, mutate };
};
