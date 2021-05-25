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
                dataItem={item}
                handleDeletarItem={data => props.handleDeletarItem(data)}
                handleEditItem={idItem => props.handleEditItem(idItem)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
