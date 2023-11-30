import { CurrencyExchangeRate } from './CurrencyExchange';

export interface CurrencyState {
  currency: CurrencyExchangeRate[] | null;
  loading: boolean;
  error: string | null;
  fetchCurrency: () => Promise<void>;
}
