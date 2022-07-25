import { Order } from 'types';
import React, { createContext, useContext, useState } from 'react';
import { api } from 'services/api';

interface OrderContextType {
  data: Order[] | null;
  getData: () => Promise<Order[] | string>;
}

export const OrderContext = createContext({} as OrderContextType);

export const OrderProvider = ({ children }: { children: React.ReactNode }) => {
  const getStorageOrder = localStorage.getItem('orders');

  const [data, setData] = useState<Order[] | null>(
    (getStorageOrder && JSON.parse(getStorageOrder)) || null
  );

  async function getData(): Promise<Order[] | string> {
    if (data) {
      return data;
    }

    try {
      const response: { transactions: Order[] } = await api.get(
        '/api/v1/orders'
      );

      setData(response.transactions);

      localStorage.setItem('orders', JSON.stringify(response.transactions));

      return response.transactions;
    } catch {
      return '';
    }
  }

  return (
    <OrderContext.Provider value={{ data, getData }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  return useContext(OrderContext);
};
