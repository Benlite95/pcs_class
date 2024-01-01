import { PureComponent } from 'react'

export default class Counter extends PureComponent {
  /*state = {
    count: 0
  };*/

  /*constructor(props) {
    super(props);
    this.state = {
      count: props.count
    };
  }*/

  /*shouldComponentUpdate(nextProps, nextState) {
    return nextProps.counter !== this.props.counter;
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
