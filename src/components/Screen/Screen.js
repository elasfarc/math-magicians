/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import './Screen.css';

export default class Screen extends React.Component {
  render() {
    const { value } = this.props;
    return <div className="screen">{value}</div>;
  }
}

Screen.propTypes = { value: PropTypes.string.isRequired };
