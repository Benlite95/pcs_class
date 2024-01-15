import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">home</Link></li> | <li><Link to="/foo">foo</Link></li>
      </ul>
    </nav>
  )
}
