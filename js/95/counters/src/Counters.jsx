import React, { Component } from 'react'
import Counter from './Counter'

export default class Counters extends Component {
  state = {
    counters: [
      { id: 1, count: 5 },
      { id: 2, count: 3 }
    ]
  };

  incrementCounter = counter => {
    counter.count++;
    this.setState({
      //counters: this.state.counters
    });
  }

  render() {
    return (
      <div>
        <div>Counters {this.state.foo}</div>
        {/* {this.state.counters.map(c => <Counter key={c.id} count={c.count}/>)} */}

        {this.state.counters.map(c => <Counter key={c.id} counter={c} incrementCounter = { this.incrementCounter } />)}
      </div>
    )
  }
}
