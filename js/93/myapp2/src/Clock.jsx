import React, { Component } from 'react';
import './Clock.css';

export default class Clock extends Component {
  state = {
    currentTime: new Date()
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        currentTime: new Date()
      })
    }, 1000);
  }

  render() {
    const { currentTime } = this.state;
    // const style = {fontFamily: 'cursive'};
    return (
      <h2 className="clock" style={{ fontFamily: 'cursive' }}>{currentTime.toLocaleTimeString()}</h2>
    )
  }
}
