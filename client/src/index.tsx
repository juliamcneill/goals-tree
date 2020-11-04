import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./style.scss";

interface MyState {
  lifeGoals: Array<Goal>;
  yearGoals: Array<Goal>;
  monthGoals: Array<Goal>;
  weekGoals: Array<Goal>;
  dayGoals: Array<Goal>;
}

interface Goal {
  id: number;
  title: string;
  description: string;
  status: string;
  date: Date;
  life?: number;
  year?: number;
  month?: number;
  week?: number;
}

class App extends React.Component<{}, MyState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      lifeGoals: [],
      yearGoals: [],
      monthGoals: [],
      weekGoals: [],
      dayGoals: [],
    };
  }

  componentDidMount() {
    let life = axios.get("/goals/life");
    let year = axios.get("/goals/year");
    let month = axios.get("/goals/month");
    let week = axios.get("/goals/week");
    let day = axios.get("/goals/day");

    axios
      .all([life, year, month, week, day])
      .then(
        axios.spread((...results) => {
          this.setState({
            lifeGoals: results[0].data,
            yearGoals: results[1].data,
            monthGoals: results[2].data,
            weekGoals: results[3].data,
            dayGoals: results[4].data,
          });
        })
      )
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        <header>
          <h1>Goals Tree</h1>
        </header>
        <div className="goals">
          <div className="goal-column">
            {this.state.lifeGoals.map((item) => (
              <div className="goal life-goal">{item.title}</div>
            ))}
          </div>
          <div className="goal-column">
            {this.state.yearGoals.map((item) => (
              <div className="goal year-goal">{item.title}</div>
            ))}
          </div>
          <div className="goal-column">
            {this.state.monthGoals.map((item) => (
              <div className="goal month-goal">{item.title}</div>
            ))}
          </div>
          <div className="goal-column">
            {this.state.weekGoals.map((item) => (
              <div className="goal week-goal">{item.title}</div>
            ))}
          </div>
          <div className="goal-column">
            {this.state.dayGoals.map((item) => (
              <div className="goal day-goal">{item.title}</div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
