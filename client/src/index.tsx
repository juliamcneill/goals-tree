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
    return (
      <>
        <header>
          <h1>Goals Tree</h1>
        </header>
        <div className="goals">
          <div className="goal life-goal">Example life goal</div>
          <div className="goal life-goal">Example life goal</div>
          <div className="goal year-goal">Example year goal</div>
          <div className="goal year-goal">Example year goal</div>
          <div className="goal year-goal">Example year goal</div>
          <div className="goal year-goal">Example year goal</div>
          <div className="goal month-goal">Example month goal</div>
          <div className="goal month-goal">Example month goal</div>
          <div className="goal month-goal">Example month goal</div>
          <div className="goal month-goal">Example month goal</div>
          <div className="goal month-goal">Example month goal</div>
          <div className="goal week-goal">Example week goal</div>
          <div className="goal week-goal">Example week goal</div>
          <div className="goal week-goal">Example week goal</div>
          <div className="goal week-goal">Example week goal</div>
          <div className="goal week-goal">Example week goal</div>
          <div className="goal week-goal">Example week goal</div>
          <div className="goal day-goal">Example day goal</div>
          <div className="goal day-goal">Example day goal</div>
          <div className="goal day-goal">Example day goal</div>
          <div className="goal day-goal">Example day goal</div>
          <div className="goal day-goal">Example day goal</div>
          <div className="goal day-goal">Example day goal</div>
          <div className="goal day-goal">Example day goal</div>
        </div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
