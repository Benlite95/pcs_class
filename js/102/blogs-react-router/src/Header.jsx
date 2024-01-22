import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <>
      <header>
        <h1>PCS Blogs</h1>
        <nav>
          <ul>
            <li><Link to="/">blog list</Link></li>
          </ul>
        </nav>
      </header>
      <hr />
    </>
  )
}

// should add propTypes...
