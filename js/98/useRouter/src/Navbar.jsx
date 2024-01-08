import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">home</Link></li> |
        <li><NavLink to="/aboutus">about us</NavLink></li> |
        <li><NavLink to="/contactus" style={({ isActive }) => {
          return { color: isActive ? 'green' : 'yellow' };
        }}> contact us</NavLink></li> |
        <li><NavLink to="/foo">foo</NavLink></li>
      </ul>
    </nav>
  )
}
