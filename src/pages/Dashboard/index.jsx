import { CardsValues } from '../../components/CardsValues';
import { FinanceList } from '../../components/FinanceList';
import { useTransaContext } from '../../contexts/TransactionsContext';

import './styles.css';

export function Dashboard() {
  const { setShowAddTransaction, listFinanceData } = useTransaContext();

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div className="constainer-dashboard">
        <div className="constainer-card-values">
          <CardsValues title="Entrada" value="2000" type="deposit" />
          <CardsValues title="Saida" value="100" type="spent" />
          <CardsValues title="Total" value="1000" type="total" />
        </div>

        <div className="container-filter">
          <div>
            <input type="text" />
          </div>

          <div
            className="button-add-item"
            onClick={() => setShowAddTransaction(prevState => !prevState)}
          >
            Adicionar Transação
          </div>
        </div>

        <FinanceList
          listFinanceData={listFinanceData}
          handleDeletarItem={idItem => console.log('handleDeletarItem', idItem)}
          handleEditItem={idItem => console.log('handleEditItem', idItem)}
        />
      </div>
    </div>
  );
}
