import React, { Component } from "react";
import { Link } from "react-router";
export class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Lyrics App</h1>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default App;
