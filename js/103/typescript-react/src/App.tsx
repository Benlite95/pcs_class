import './App.css';
import Header from './Header';
import Highlight from './Highlight';
import Person from './Person';
import Welcome from './Welcome';

const joe: Person = {
  first: 'Joe',
  last: 'Biden'
};

function App() {
  return (
    <>
      <Highlight>
        <Header>I am a child</Header>
      </Highlight>
      Hello World
      <Welcome person={joe}/>
    </>
  )
}

export default App
