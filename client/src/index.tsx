import React from "react";
import ReactDOM from "react-dom";
import "./style.scss";

interface MyState {}

class App extends React.Component<{}, MyState> {
  constructor(props: {}) {
    super(props);
    this.state = {};
  }

  render() {
    return <h1>Goals App</h1>;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
