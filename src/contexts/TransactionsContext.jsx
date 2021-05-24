import React, { useState, createContext, useContext } from 'react';

export const TransactionsContext = createContext();

const listFinanceData = [
  {
    id: '1',
    description: 'Pagar aluguel',
    type: 'Fixo',
    value: '100',
  },
  {
    id: '2',
    description: 'Café',
    type: 'Varidado',
    value: '3',
  },
  {
    id: '3',
    description: 'Pagar aluguel',
    type: 'Fixo',
    value: '1000',
  },
  {
    id: '4',
    description: 'Água',
    type: 'Fixo',
    value: '70',
  },
];

export function TransactionsProvider({ children }) {
  const [showAddTransaction, setShowAddTransaction] = useState(false);

  const handlesTransactionModal = () => {
    setShowAddTransaction(preventState => !preventState);
  };

  return (
    <TransactionsContext.Provider
      value={{ showAddTransaction, handlesTransactionModal }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransaContext() {
  return useContext(TransactionsContext);
}
