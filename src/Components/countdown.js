// A component is a function that retuns JSX
import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
//import './Countdown.css'

class Countdown extends React.Component {
  constructor() {
    super();
    let weddingDate = new Date('31 May 2019 11:00:00 GMT+2'); //Normally GMT+1 but daylight saving time
    let weddingUnixTime = Math.round(weddingDate.getTime() / 1000);
    let currentUnixTime = Math.round((new Date()).getTime() / 1000);

    let displayTime = (weddingUnixTime-currentUnixTime) > 0 ? weddingUnixTime - currentUnixTime : 0;

    this.state = {
      time: {},
      seconds: displayTime
    };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  secondsToTime = (secs) => {
    let divisor_for_days = secs / (60 * 60 * 24);
    let days = Math.floor(divisor_for_days);

    let divisor_for_hours = secs / (60 * 60) % 24;
    let hours = Math.floor(divisor_for_hours);

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      'd': days,
      'h': hours,
      'm': minutes,
      's': seconds
    };
    return obj;
  }

  startTimer() {
    if (this.timer == 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });

    // Check if we're at zero.
    if (seconds == 0) {
      clearInterval(this.timer);
    }
  }

  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
    this.startTimer();
  }

  render() {
    // startTimer();
    return (
      <div className="Countdown">
        <Row>
          <Col className="countable">
            <div className="countdown_digit">{this.state.time.d}</div>
            <label>Dagen</label>
          </Col>

          <Col className="countable">
            <div className="countdown_digit">{this.state.time.h}</div>
            <label>Uren</label>
          </Col>

          <Col className="countable">
            <div className="countdown_digit">{this.state.time.m}</div>
            <label>Minuten</label>
          </Col>
        </Row>
      </div>
    )
  };

}

export default Countdown;
