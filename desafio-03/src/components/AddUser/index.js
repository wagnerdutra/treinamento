import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import Form from './styles';

class AddUser extends Component {
  inputRef = React.createRef();

  componentDidMount() {
    this.inputRef.current.focus();
  }

  render() {
    const { handleSubmit, handleCancel, onInputChange, userName, hadError } = this.props;
    return (
      <Modal closeModal={handleCancel}>
        <Form onSubmit={handleSubmit}>
          <p>Adicionar novo usuário</p>
          <input
            type="text"
            value={userName}
            ref={this.inputRef}
            onChange={onInputChange}
            className={hadError ? 'error' : ''}
          />
          <div className="actions">
            <button type="button" className="secondary" onClick={handleCancel}>
              Cancelar
            </button>
            <button type="submit" className="success">
              Salvar
            </button>
          </div>
        </Form>
      </Modal>
    );
  }
}

AddUser.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  hadError: PropTypes.bool.isRequired
};

export default AddUser;
