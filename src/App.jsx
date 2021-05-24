import { Header } from './components/Header/index';
import { ModalAddTransaction } from './components/ ModalAddTransaction';
import { Dashboard } from './pages/Dashboard';
import { useTransaContext } from './contexts/TransactionsContext';

export default function App() {
  const { handlesTransactionModal, showAddTransaction } = useTransaContext();

  return (
    <div>
      <Header />
      <Dashboard />
      <ModalAddTransaction
        modalIsOpen={showAddTransaction}
        testeFunction={handlesTransactionModal}
      />
    </div>
  );
}
