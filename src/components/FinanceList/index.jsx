import { ItemList } from '../ItemList';

import './styles.css';

export function FinanceList(props) {
  return (
    <div className="container-finance-list">
      <ul>
        {props.listFinanceData.map(item => {
          return (
            <li key={item.id}>
              <ItemList
                id={item.id}
                description={item.description}
                type={item.transactionType}
                value={item.value}
                handleDeletarItem={idItem => props.handleDeletarItem(idItem)}
                handleEditItem={idItem => props.handleEditItem(idItem)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
