import React from "react";

import Calculator from "../components/Calculator.jsx";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome Home!</h1>
        <Calculator />
      </div>
    );
  }
}
