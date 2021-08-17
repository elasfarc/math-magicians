import React, { useState, useEffect } from 'react';
import './Calculator.css';
import CalculatorBtns from '../CalculatorBtns/CalculatorBtns';
import Screen from '../Screen/Screen';
import calculate from '../../logic/calculate';

const Calculator = () => {
  const [total, useTotal] = useState(null);
  const [next, useNext] = useState(null);
  const [operation, useOperation] = useState(null);
  const [error, useError] = useState(null);

  useEffect(() => {
    useTotal(null);
    useNext(null);
    useOperation(null);
  }, [error]);

  const handleBtnClick = (buttonName) => {
    if (error) useError(null);
    try {
      const calculatorData = calculate(
        {
          total,
          next,
          operation,
          error,
        },
        buttonName,
      );
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
    } catch (e) {
      useError(e);
    }
  };

  const display = () => {
    if (error) return error.message;
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
    <div className="calc-container">
      <h2 className="calc-heading">lets do some math</h2>
      <div className="calculator">
        <Screen value={display()} isError={!!error} />
        <CalculatorBtns handleBtnClick={handleBtnClick} />
      </div>
    </div>
  );
};
export default Calculator;
