import React, { useState, createContext, useContext } from 'react';

export const TransactionsContext = createContext();

const listFinanceDataMock = [
  {
    id: '1',
    description: 'Pagar aluguel mano',
    transactionType: 'Fixo',
    value: '100',
  },
  {
    id: '2',
    description: 'Café',
    transactionType: 'Varidado',
    value: '3',
  },
  {
    id: '3',
    description: 'Pagar aluguel',
    transactionType: 'Fixo',
    value: '1000',
  },
  {
    id: '4',
    description: 'Água',
    transactionType: 'Fixo',
    value: '70',
  },
];

export function TransactionsProvider({ children }) {
  const [showAddTransaction, setShowAddTransaction] = useState(false);
  const [listFinanceData, setListFinanceData] = useState(listFinanceDataMock);

  const value = {
    showAddTransaction,
    setShowAddTransaction,

    listFinanceData,
    setListFinanceData,
  };

  return (
    <TransactionsContext.Provider value={value}>
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransaContext() {
  return useContext(TransactionsContext);
}
