import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { onClick, children } = props;
  return (
    <button type="button" href="" onClick={onClick}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  children: 'Salvar',
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string,
};

export default Button;
