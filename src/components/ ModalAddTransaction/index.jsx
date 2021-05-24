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
  function afterOpenModal() {}

  function closeModal() {
    props.testeFunction();
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
          <input></input>
        </div>

        <div className="container-input-data">
          <label htmlFor="">Tipo do gasto</label>
          <input></input>
        </div>

        <div className="container-input-data">
          <label htmlFor="">Valor</label>
          <input></input>
        </div>

        <div className="container-action-button-transaction">
          <button>Salvar</button>
          <button>Cancelar</button>
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
