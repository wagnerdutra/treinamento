import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Box, Container } from './styles';

class Modal extends Component {
  containerRef = React.createRef();

  handleContainerClick = e => {
    if (e.target !== this.containerRef.current) return;
    const { closeModal } = this.props;
    closeModal();
  };

  render() {
    const { width, height, modalState, ...rest } = this.props;
    return (
      <Container ref={this.containerRef} onClick={this.handleContainerClick}>
        <Box width={width} height={height}>
          {rest.children}
        </Box>
      </Container>
    );
  }
}

Modal.propTypes = {
  modalState: PropTypes.bool.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  closeModal: PropTypes.func.isRequired
};

Modal.defaultProps = {
  width: '500px',
  height: '200px'
};

const mapStateToProps = state => ({
  modalState: state.modal
});

export default connect(mapStateToProps)(Modal);
