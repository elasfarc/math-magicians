import React, { useState } from 'react';
import './Calculator.css';
import CalculatorBtns from '../CalculatorBtns/CalculatorBtns';
import Screen from '../Screen/Screen';
import calculate from '../../logic/calculate';

const Calculator = () => {
  const [total, useTotal] = useState(null);
  const [next, useNext] = useState(null);
  const [operation, useOperation] = useState(null);

  const handleBtnClick = (buttonName) => {
    const calculatorData = calculate({ total, next, operation }, buttonName);

    Object.entries(calculatorData).forEach(([key, value]) => {
      switch (key) {
        case 'total':
          useTotal(value);
          break;
        case 'next':
          useNext(value);
          break;
        default:
          useOperation(value);
      }
    });
  };

  const display = () => {
    if (total) {
      if (next) return next;
      return total;
    }
    if (next) {
      if (next === '0') return '0';
      return next;
    }
    return '0';
  };
  return (
    <div className="calculator">
      <Screen value={display()} />
      <CalculatorBtns handleBtnClick={handleBtnClick} />
    </div>
  );
};
export default Calculator;
