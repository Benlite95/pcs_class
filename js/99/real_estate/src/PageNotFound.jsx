import {Link} from 'react-router-dom';

export default function PageNotFound() {
  return (
    <>
      <div>404... PageNotFound</div>
      <Link to="/buy">Click here to see our best houses</Link>
    </>
  )
}
