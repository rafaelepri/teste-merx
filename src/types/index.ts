export interface Order {
  id: string;
  order: number;
  payment: {
    amount: number;
    currency: string;
    'currency-sign': string;
    'due-date': string;
  };
  status: {
    code: string;
    date: string;
    description: string;
  }[];
  terms: number;
}
