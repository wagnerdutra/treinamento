import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import Form from './styles';

const AddUser = ({
  handleSubmit, userName, inputRef, onInputChange,
}) => (
  <Modal>
    <Form onSubmit={handleSubmit}>
      <p>Adicionar novo usuário</p>
      <input type="text" value={userName} ref={inputRef} onChange={onInputChange} />
      <div>
        <button type="button" className="secondary">
          Cancelar
        </button>
        <button type="submit" className="success">
          Salvar
        </button>
      </div>
    </Form>
  </Modal>
);

AddUser.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired,
  inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.instanceOf(Element) })]).isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default AddUser;
