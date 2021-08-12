/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './Calculator.css';
// import { CalculatorBtns } from '../CalculatorBtns/CalculatorBtns';
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
  }

  handleBtnClick(buttonName) {
    this.setState((state) => calculate(state, buttonName));
  }

  render() {
    const { total } = this.state;
    return (
      <div className="calculator">
        <Screen value={total} />
        <CalculatorBtns handleBtnClick={this.handleBtnClick} />
      </div>
    );
  }
}
