import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Box, Container } from './styles';

const Modal = ({
  modalState, width, height, ...rest
}) => (
  <Container opened={modalState}>
    <Box width={width} height={height}>
      {rest.children}
    </Box>
  </Container>
);

Modal.propTypes = {
  modalState: PropTypes.bool.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};

Modal.defaultProps = {
  width: '500px',
  height: '200px',
};

const mapStateToProps = state => ({
  modalState: state.modal,
});

export default connect(mapStateToProps)(Modal);
