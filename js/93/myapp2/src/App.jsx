import { Component } from 'react'
import './App.css'
import Welcome, { WelcomeC } from './Welcome'
import Clock from './Clock';

class App extends Component {
  state = {
    count: 1
  };

  componentDidMount() {
    console.log('app componentDidMount');
    this.interval = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      });
    }, 2000);
  }

  componentWillUnmount() {
    console.log('app componentWillUnmount');
    clearInterval(this.interval);
  }

  render() {
    const { count } = this.state;
    return (
      <>
        <h1>hello world!</h1>
        <Welcome first={count < 10 ? "Joe" : "Joey"} />
        <Welcome first={count} />
        <WelcomeC first="Kamala" />
        {count < 10 || count > 20 ? <WelcomeC first="Donald Trump" /> : <h3>Donald is gone!</h3>}
        <h1>app - {count}</h1>
        {count > 5 ? <Clock /> : <h2>no clock yet</h2>}
      </>
    )
  }
}

export default App
