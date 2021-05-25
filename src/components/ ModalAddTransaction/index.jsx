import { useState } from 'react';
import Modal from 'react-modal';

import { AiOutlineClose } from 'react-icons/ai';
import './styles.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export function ModalAddTransaction(props) {
  const [dataTransaction, setDataTransaction] = useState({});

  function afterOpenModal() {}

  function closeModal() {
    props.testeFunction();
  }

  function handleUpdateStates(item, value) {
    const dataTransactionUpdate = {
      ...dataTransaction,
      [item]: value,
    };

    setDataTransaction(dataTransactionUpdate);
  }

  function handleAddTransaction() {
    const dataTransactionUpdate = {
      ...dataTransaction,
      id: new Date().getTime(),
    };

    props.handleAddTransaction(dataTransactionUpdate);
    closeModal();
  }

  function testeModal() {
    return (
      <div className="container-modal-add-transaction">
        <div className="container-close-button">
          <div onClick={closeModal}>
            <AiOutlineClose size={24} />
          </div>
        </div>

        <h1>Registre sua trasação</h1>

        <div className="container-input-data">
          <label htmlFor="">Descrição</label>
          <input
            type="text"
            onChange={e => handleUpdateStates('description', e.target.value)}
          />
        </div>

        <div className="container-input-data">
          <label htmlFor="">Tipo do gasto</label>
          <input
            type="text"
            onChange={e =>
              handleUpdateStates('transactionType', e.target.value)
            }
          />
        </div>

        <div className="container-input-data">
          <label htmlFor="">Valor</label>
          <input
            type="text"
            onChange={e => handleUpdateStates('value', e.target.value)}
          />
        </div>

        <div className="container-action-button-transaction">
          <button onClick={handleAddTransaction}>Salvar</button>
          <button onClick={closeModal}>Cancelar</button>
        </div>
      </div>
    );
  }

  return (
    <Modal
      isOpen={props.modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      {testeModal()}
    </Modal>
  );
}
