import React from 'react';
import './Calculator.css';
// import { CalculatorBtns } from '../CalculatorBtns/CalculatorBtns';
import CalculatorBtns from '../CalculatorBtns/CalculatorBtns';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
  }

  // handleBtnClick() {
  //   return 5;
  // }

  render() {
    return (
      <div className="calculator">
        <CalculatorBtns />
      </div>
    );
  }
}
