import { Header } from './components/Header/index';
import { ModalAddTransaction } from './components/ ModalAddTransaction';
import { Dashboard } from './pages/Dashboard';
import { useTransaContext } from './contexts/TransactionsContext';

export default function App() {
  const {
    showAddTransaction,
    setShowAddTransaction,
    listFinanceData,
    setListFinanceData,
  } = useTransaContext();

  return (
    <div>
      <Header />
      <Dashboard />
      <ModalAddTransaction
        modalIsOpen={showAddTransaction}
        testeFunction={() => setShowAddTransaction(prevState => !prevState)}
        handleAddTransaction={dataTransaction => {
          setListFinanceData([...listFinanceData, dataTransaction]);
        }}
      />
    </div>
  );
}
