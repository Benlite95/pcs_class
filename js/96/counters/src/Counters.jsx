import { PureComponent } from 'react'
import Counter from './Counter'
// import Total from './Total';

export default class Counters extends PureComponent {
  /*shouldComponentUpdate(nextProps, nextState) {
    return nextProps.counters !== this.props.counters;
  }*/

  render() {
    return (
      <div>
        <div>Counters</div>

        {this.props.counters.map(c => <Counter key={c.id} counter={c} incrementCounter = { this.props.incrementCounter } />)}

        {/*<Total total={this.state.counters.reduce((a, c) => a + c.count, 0)}/>*/}
      </div>
    )
  }
}
