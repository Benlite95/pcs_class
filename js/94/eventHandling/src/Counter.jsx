import { Component } from "react";

export default class Counter extends Component{
  /*state = {
    count: 0
  };*/

  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };

    /*this.handleClick = this.handleClick.bind(this);*/

    console.dir(this);
  }

  handleClick = () => {
  //handleClick() {
    console.log('clicked');
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <div>
        I was clicked <button onClick={/*this.handleClick*/
        /*this.handleClick.bind(this)*/
        () => this.handleClick()}>{this.state.count}</button> times
      </div>
    )
  }
}
