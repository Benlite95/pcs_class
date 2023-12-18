import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

/*ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)*/

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
//root.render(<div>Hello World</div>);

/*function getCurrentTime() {
  return (<h2>{new Date().toLocaleTimeString()}</h2>);
}

setInterval(() => {
  root.render(
    <>
      <h1>PCS Clock</h1>
      {getCurrentTime()}
    </>
  )
}, 1000);*/

root.render(<App/>)
