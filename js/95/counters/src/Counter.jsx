import React, { Component } from 'react'

export default class Counter extends Component {
  /*state = {
    count: 0
  };*/

  /*constructor(props) {
    super(props);
    this.state = {
      count: props.count
    };
  }*/

  handleClick = () => {
    /*this.setState({
      count: this.state.count + 1
    });*/
    //this.props.counter.count++;
    this.props.incrementCounter(this.props.counter);
  }

  render() {
    return (
      <button onClick={this.handleClick}>{/*this.state.count*/this.props.counter.count}</button>
    )
  }
}
