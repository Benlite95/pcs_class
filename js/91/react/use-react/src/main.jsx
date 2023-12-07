import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { jsx as _jsx } from "react/jsx-runtime";

/*ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)*/


const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<h1>Hello World React!</h1>);

/*root.render(_jsx("h1", {
  children: "Hello World React!"
}));*/

const sayHi = <h2 className="foo">Hi!</h2>;
root.render(sayHi);
console.log(sayHi);

root.render(<header>
  <h1>PCS</h1>
  <h2>React</h2>
</header>);

root.render(
  <div>
    <h1>PCS</h1>
    <h2>React</h2>
  </div>
);

root.render(
  <React.Fragment>
    <h1>PCS</h1>
    <h2>React</h2>
  </React.Fragment>
);

root.render(
  <>
    <h1>PCS</h1>
    <h2>React</h2>
  </>
);

const potus = {
  first: 'Joe',
  last: 'Biden'
}

root.render(
  <div>
    {potus.first} {potus.last}
  </div>
);

function formatName(person) {
  return `${person.first} ${person.last}`;
}

root.render(
  <div>
    {formatName(potus)}
  </div>
);

function getGreeting(person) {
  if (person) {
    return <h1>Hello {formatName(person)}</h1>;
  } else {
    return <h1>Hello unknown person</h1>;
  }
}

root.render(getGreeting(potus));
root.render(getGreeting());
