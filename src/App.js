import React from "react";
import "./styles.css";

export default class App extends React.Component {
  dados = () => {
    return (
      <>
        <h1>number double</h1>
      </>
    );
  };

  double = (number) => {
    return number * 2;
  };

  render() {
    return (
      <>
        {this.dados()}
        <h2>{this.double(27)}</h2>
      </>
    );
  }
}
