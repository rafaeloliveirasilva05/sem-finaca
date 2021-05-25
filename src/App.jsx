import { Header } from './components/Header/index';
import { ModalAddTransaction } from './components/ ModalAddTransaction';
import { ModalAlert } from './components/ModalAlert';

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

    showAlertModal,
    setShowAlertModal,

    transactionDataDelete,
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
      <ModalAlert
        modalIsOpen={showAlertModal}
        testeFunction={() => {
          setShowAlertModal(false);
        }}
        dataTransaction={transactionDataDelete}
        deleteItem={idItem => {
          const listFinanceDataUpdate = listFinanceData.filter(item => {
            return item.id !== idItem;
          });

          setShowAlertModal(true);

          setListFinanceData(listFinanceDataUpdate);
        }}
      />
    </div>
  );
}
