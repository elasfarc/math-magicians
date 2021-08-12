/* eslint-disable react/no-unused-state */
import React from 'react';
import './Calculator.css';
import CalculatorBtns from '../CalculatorBtns/CalculatorBtns';
import Screen from '../Screen/Screen';
import calculate from '../../logic/calculate';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.display = this.display.bind(this);
  }

  handleBtnClick(buttonName) {
    this.setState((state) => calculate(state, buttonName));
  }

  display() {
    const { total, next } = this.state;

    if (total) {
      if (next) return next;
      return total;
    }
    if (next) {
      if (next === '0') return '0';
      return next;
    }
    return '0';
  }

  render() {
    return (
      <div className="calculator">
        <Screen value={this.display()} />
        <CalculatorBtns handleBtnClick={this.handleBtnClick} />
      </div>
    );
  }
}
