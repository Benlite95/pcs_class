import { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    //name: 'Joe Biden',
    name: '',
    age: 0,
    email: 'jbiden@whitehouse.gov'
  }

  /*handleNameChange = e => {
    this.setState({
      name: e.target.value
    });
  }*/

  handleInputChange = e => {
    /*this.setState({
      name: e.target.value
    });*/

    /*const newState = {}
    newState[e.target.name] = e.target.value;
    this.setState(newState);*/

    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    this.setState({
      [e.target.name]: value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log('would submit', this.state);
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          name: <input value={this.state.name} onChange={this.handleInputChange} name="name" required/>
          <br />
          age: <input type="number" value={this.state.age} onChange={this.handleInputChange} name="age" min="1" max="120"/>
          <br />
          email <input type="email" value={this.state.email} onChange={this.handleInputChange} name="email" />
          <br />
          <button>submit</button>
        </form>
      </>
    );
  }
}

export default App
