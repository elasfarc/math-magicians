/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './CalculatorBtns.css';
import '../../App.css';

export default class CalculatorBtns extends React.Component {
  render() {
    const numbers = [...Array(10).keys()].reverse();
    // const numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1, ".", 0];
    const functionalBtns = ['AC', '±', '%', '.'];
    const operationsBtns = ['÷', '×', '−', '+', '='];
    return (
      <div className="btns-container flex-row">
        <div>
          <div>
            {functionalBtns.map((fnBtn) => (
              <button
                key={fnBtn}
                type="button"
                className={`btn functional-btn ${
                  fnBtn === '.' ? 'period' : null
                }`}
              >
                {fnBtn}
              </button>
            ))}
          </div>
          <div className="flex-row-r wrap">
            {numbers.map((number) => (
              <button
                key={number}
                type="button"
                className={`btn number-btn ${number === 0 ? 'zero' : null}`}
              >
                {number}
              </button>
            ))}
          </div>
        </div>
        <div className="flex-col">
          {operationsBtns.map((operationBtn) => (
            <button
              key={operationBtn}
              type="button"
              className="btn operation-btn"
            >
              {operationBtn}
            </button>
          ))}
        </div>
      </div>
    );
  }
}
