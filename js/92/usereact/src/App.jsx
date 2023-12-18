import './App.css';
import Welcome from './Welcome';
import WelcomeClass from './WelcomeClass';

function App() {
  return (
    <div>
      App - Hello World
      <Welcome first="Joe" last="Biden"/>
      <WelcomeClass first="Joe" last="Biden" />
    </div>
  )
}

export default App
