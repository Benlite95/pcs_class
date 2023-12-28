import { Component } from 'react';
import './App.css'

class App extends Component {
  state = {
    current: '0'
  };

  /*constructor(props) {
    super(props);

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }*/

  calculate() {
    const left = Number(this.state.first);
    const right = Number(this.state.current);
    let result;
    switch(this.state.operation) {
      case '+':
        result = left + right;
        break;
      case '-':
        result = left - right;
        break;
      case '*':
        result = left * right;
        break;
      case '/':
        result = left / right;
        break;
    }
    this.setState({
      current: result
    });
  }

  //handleButtonClick = e => {
    //console.log('a button was clicked', num); //, e.target.innerText);
    //console.log(this);

  handleButtonClick(btn) {
    switch(btn) {
      case '+':
      case '-':
      case '*':
      case '/':
        this.setState({
          first: this.state.current,
          current: '',
          operation: btn
        })
        break;
      case 'C':
        this.setState({
          current: '0',
          first: 0,
          operation: null
        })
        break;
      case '=':
        this.calculate();
        break;
      case '.':
        if (this.state.current.includes('.')) {
          break;
        }
        // fall through
      default:
        this.setState({
          current: this.state.current === '0' ? btn.toString() : this.state.current + btn
        });
    }
  }

  render() {
    const buttons = [7, 8, 9, '+', 4, 5, 6, '-', 1, 2, 3, '*', 'C', 0,'.', '/', '='].map(n => <button key={n} onClick={() => this.handleButtonClick(n)}>{n}</button>);

    return (
      <div className="calculator">
        <input value={this.state.current} readOnly/>
        {/*<button onClick={/*this.handleButtonClick.bind(this, 7)* / () => this.handleButtonClick(7)}>7</button>*/}
        {buttons}
      </div>
    );
  }
}

export default App
