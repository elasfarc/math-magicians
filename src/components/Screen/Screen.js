import React from "react";
import "./Screen.css";
export default class Screen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { value } = this.props;
    return <div className="screen">{value}</div>;
  }
}
