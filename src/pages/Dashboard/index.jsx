import { CardsValues } from '../../components/CardsValues';
import { FinanceList } from '../../components/FinanceList';

import './styles.css';

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

export function Dashboard() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div className="constainer-dashboard">
        <div className="constainer-card-values">
          <CardsValues />
          <CardsValues />
          <CardsValues />
        </div>

        <div className="container-filter">
          <div>
            <input type="text" />
          </div>

          <div
            className="button-add-item"
            onClick={() => console.log('add item')}
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
