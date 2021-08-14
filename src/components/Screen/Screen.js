import React from 'react';
import PropTypes from 'prop-types';
import './Screen.css';

const Screen = ({ value, isError }) => (
  <div className={`screen ${isError ? 'error' : null}`}>{value}</div>
);
export default Screen;
Screen.propTypes = {
  value: PropTypes.string.isRequired,
  isError: PropTypes.bool.isRequired,
};
