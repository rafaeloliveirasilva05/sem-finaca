import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

import { TransactionsProvider } from './contexts/TransactionsContext';

import './styles/globals.css'

ReactDOM.render(
  <TransactionsProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TransactionsProvider>
  ,
  document.getElementById('root'),
);
