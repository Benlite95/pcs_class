
import { PureComponent } from 'react';
import './App.css'
import Counters from './Counters'
import Total from './Total';
import CounterF from './CounterF';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      foo: 0,
      counters: [
        { id: 1, count: 5 },
        { id: 2, count: 3 }
      ]
    };

    Object.freeze(this.state.counters);
    //this.state.counters.push({});

    this.state.counters.forEach(c => Object.freeze(c));
  }

  /*componentDidMount() {
    setInterval(() => {
      this.setState({ foo: this.state.foo + 1 })
    }, 1000);
  }*/

  incrementCounter = counter => {
    //counter.count++;
    const counterCopy = { ...counter, count: counter.count + 1 };
    Object.freeze(counterCopy);

    const countersCopy = [...this.state.counters];
    countersCopy[countersCopy.indexOf(counter)] = counterCopy;
    Object.freeze(countersCopy);

    this.setState({
      counters: countersCopy
    });
  }

  /*shouldComponentUpdate(nextProps, nextState) {
    console.log(`shouldComponentUpdate returning`, nextState.counters !== this.state.counters);

    return nextState.counters !== this.state.counters;
  }*/

  render() {
    return (
      <>
        <h1>{this.state.foo}</h1>
        <CounterF/>
        <Counters counters={this.state.counters} incrementCounter={this.incrementCounter} />
        <Total total={this.state.counters.reduce((a, c) => a + c.count, 0)} />
      </>
    );
  }
}

export default App
