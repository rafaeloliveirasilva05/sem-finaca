import { FaTrash, FaPen } from 'react-icons/fa';

import './styles.css';

export function ItemList(props) {
  const { id, description, type, value } = props;

  return (
    <div className="container-item-list">
      <div className="container-item-list-teste">
        <span className="item-list-description">{description || '--'}</span>
        <span className="item-list-type">{type || '--'}</span>
        <span className="item-list-value">{value ? `R$ ${value}` : '--'}</span>
      </div>

      <div className="container-action-buttons">
        <div
          title="Deletar"
          className="container-buttons"
          onClick={() => props.handleDeletarItem(id)}
        >
          <FaTrash size={14} color="#4d4f50" />
        </div>
        <div
          title="Editar"
          className="container-buttons"
          onClick={() => props.handleEditItem(id)}
        >
          <FaPen size={14} color="#4d4f50" />
        </div>
      </div>
    </div>
  );
}
