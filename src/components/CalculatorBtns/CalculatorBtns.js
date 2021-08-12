import React from "react";

// export function CalculatorBtns(props) {
//   return (<h1>BTNS</h1>);
// }

export default class CalculatorBtns extends React.Component {
  render() {
    const numbers = [...Array(10).keys()];
    const functionalBtns = ["AC", "±", "%"];
    const operationsBtns = ["÷", "×", "−", "+", "="];
    return (
      <>
        <div>
          <div>
            {functionalBtns.map((fnBtn) => (
              <button className="functional-btn">{fnBtn}</button>
            ))}
          </div>
          <div>
            {numbers.map((number) => (
              <button className="number-btn">{number}</button>
            ))}
          </div>
        </div>
        <div className="operations-btn">
          {operationsBtns.map((fnBtn) => (
            <button className="functional-btn">{fnBtn}</button>
          ))}
        </div>
      </>
    );
  }
}
