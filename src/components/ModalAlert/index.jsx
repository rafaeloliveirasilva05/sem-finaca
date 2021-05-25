import Modal from 'react-modal';

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

export function ModalAlert(props) {
  function afterOpenModal() {}

  function closeModal() {
    props.testeFunction();
  }

  function testeModal() {
    return (
      <div className="container-modal-alert">
        <h2>Aviso</h2>

        <span>{`Deseja deletar a transação: ${props.dataTransaction.description}`}</span>

        <div className="container-modal-alert-action-button">
          <button
            onClick={() => {
              props.deleteItem(props.dataTransaction.id);
              closeModal();
            }}
          >
            Sim
          </button>
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
