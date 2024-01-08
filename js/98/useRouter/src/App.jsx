import { Outlet, Link, NavLink } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar'

function App() {
  return (
    <div>
      <h1>PCS Routing App</h1>
      <Navbar />
      <hr />
      <Outlet />
    </div>
  )
}

export default App
