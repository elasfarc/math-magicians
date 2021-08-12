import React from 'react';
import './Calculator.css';
// import { CalculatorBtns } from '../CalculatorBtns/CalculatorBtns';
import CalculatorBtns from '../CalculatorBtns/CalculatorBtns';
import Screen from '../Screen/Screen';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="calculator">
        <Screen value="0" />
        <CalculatorBtns />
      </div>
    );
  }
}
