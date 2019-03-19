import React, { Component } from 'react';
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
    const { width, height, children } = this.props;
    return (
      <Container ref={this.containerRef} onClick={this.handleContainerClick}>
        <Box width={width} height={height}>
          {children}
        </Box>
      </Container>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  closeModal: PropTypes.func.isRequired
};

Modal.defaultProps = {
  width: '500px',
  height: '200px'
};

export default Modal;
