import { Component } from "react";

export default class WelcomeClass extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {first, last} = this.props;

    return (
      <>
        <h2>Hello {first} {last}</h2>
        <h1>Welcome to React!</h1>
      </>
    )
  }
}
