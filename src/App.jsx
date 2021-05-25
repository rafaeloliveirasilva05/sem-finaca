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
    transactionData,
    isUpdate,
    setIsUpdate,
  } = useTransaContext();

  return (
    <div>
      <Header />
      <Dashboard />
      <ModalAddTransaction
        modalIsOpen={showAddTransaction}
        testeFunction={() => {
          setIsUpdate(false);
          setShowAddTransaction(false);
        }}
        transactionData={transactionData || null}
        isUpdate={isUpdate}
        handleAddTransaction={dataTransaction => {
          setListFinanceData([...listFinanceData, dataTransaction]);
        }}
        handleUpdateTransaction={dataTransaction => {
          const listFinanceDataUpdate = listFinanceData.map(item =>
            item.id === dataTransaction.id ? dataTransaction : item,
          );

          setListFinanceData(listFinanceDataUpdate);
        }}
      />
    </div>
  );
}
