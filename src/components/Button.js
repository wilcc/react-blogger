import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ className, onClick, type,children }) => {
  return (
    <button
      type={type}
      className={className}
      style={{ margin: '10px 15px' }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;


Button.prototype={
  type:PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  Children: PropTypes.string
}