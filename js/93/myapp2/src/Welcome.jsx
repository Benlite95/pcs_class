import { Component } from "react";

export default function Welcome(props) {
  const { first } = props;
  return (
    <h2>hello {first}</h2>
  );
}

export class WelcomeC extends Component {
  constructor(props) {
    super(props);

    //count = 1;
    this.state = {
      count: 1,
      foo: 'bar',
      count2: -1
    };

    /*setInterval(() => {
      //this.count++;
      this.setState({
        count: this.state.count + 1
      });
    }, 1000);*/
  }

  componentDidMount() {
    console.log('welcome componentDidMount');
    this.interval = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      });
      //this.state.count = this.state.count + 1;
    }, 1000);

    this.interval2 = setInterval(() => {
      this.setState({
        count2: this.state.count2 - 1
      });
    }, 3000);
  }

  componentWillUnmount() {
    console.log('welcome componentWillUnmount');
    clearInterval(this.interval);
  }

  render() {
    const { first } = this.props;
    const { count, foo, count2 } = this.state;

    return (
      <>
        <h2>Hello {first}</h2>
        {/*<h1>{this.count}</h1>*/}
        <h1>welcome - {count} {count2} - {foo }</h1>
      </>
    )
  }
}
