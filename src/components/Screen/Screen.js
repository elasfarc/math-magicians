/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import './Screen.css';

const Screen = ({ value }) => <div className="screen">{value}</div>;
export default Screen;
Screen.propTypes = { value: PropTypes.string.isRequired };
