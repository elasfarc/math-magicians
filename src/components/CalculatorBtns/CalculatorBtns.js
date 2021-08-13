import React from 'react';
import './CalculatorBtns.css';
import '../../App.css';
import PropTypes from 'prop-types';

const CalculatorBtns = ({ handleBtnClick }) => {
  const numbers = [...Array(10).keys()].reverse().map((n) => n.toString());
  const functionalBtns = ['AC', '±', '%', '.'];
  const operationsBtns = ['÷', '×', '−', '+', '='];

  return (
    <div className="btns-container flex-row">
      <div>
        <div>
          {functionalBtns.map((fnBtn) => (
            <button
              key={fnBtn}
              onClick={() => handleBtnClick(fnBtn)}
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
              onClick={() => handleBtnClick(number)}
              type="button"
              className={`btn number-btn ${number === '0' ? 'zero' : null}`}
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
            onClick={() => handleBtnClick(operationBtn)}
            type="button"
            className="btn operation-btn"
          >
            {operationBtn}
          </button>
        ))}
      </div>
    </div>
  );
};
export default CalculatorBtns;
CalculatorBtns.propTypes = { handleBtnClick: PropTypes.func.isRequired };
