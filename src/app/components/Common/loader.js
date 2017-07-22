import React from 'react';
import PropTypes from 'prop-types';

const LoadingText = ({ msg, color, position }) => (
  <div className={`sk-three-bounce text-${color || 'default'} ${position}`}>
    <div className="loading-message mr-1">{msg}</div>
    <div className={`sk-child sk-bounce1 bg-${color}`} />
    <div className={`sk-child sk-bounce2 bg-${color}`} />
    <div className={`sk-child sk-bounce3 bg-${color}`} />
  </div>
);

LoadingText.propTypes = {
  msg: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  position: PropTypes.string, // eslint-disable-line react/require-default-props
};

export default LoadingText;
