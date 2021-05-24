import { CardsValues } from './components/CardsValues';
import { FinanceList } from './components/FinanceList';
import { Header } from './components/Header/index';

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

export default function App() {
  return (
    <div className="App">
      <Header />
      <FinanceList
        listFinanceData={listFinanceData}
        handleDeletarItem={idItem => console.log('handleDeletarItem', idItem)}
        handleEditItem={idItem => console.log('handleEditItem', idItem)}
      />
    </div>
  );
}
