import React from "react";
import moment from "moment";

export class Timer extends React.Component {
  // current_date: moment().format("YYYY/MM/d"),

  shouldComponentUpdate = () => false;

  render() {
    return (
      <div>
        {moment().format("hh:mm:ss")}
        <br />
        {moment().format("YYYY:MM:d")}
      </div>
    );
  }
}

export default Timer;
