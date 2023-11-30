import { create } from 'zustand';
import { CurrencyState } from '../types/CurrencyState';
import { getCurrency } from '../services/getCurrency';

const useCurrencyStore = create<CurrencyState>((set) => ({
  currency: null,
  loading: false,
  error: null,
  fetchError: null,
  fetchCurrency: async () => {
    set({ loading: true, error: null });
    try {
      const currency = await getCurrency();
      set({ currency: currency, loading: false });
    } catch (error: unknown) {
      if (error instanceof Error) {
        set({ error: error.message, loading: false });
      } else {
        set({ error: 'An unknown error occurred', loading: false });
      }
    }
  },
}));

export default useCurrencyStore;
