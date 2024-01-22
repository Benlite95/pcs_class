import { Link } from 'react-router-dom';
import './BlogInfo.css';

export default function BlogInfo(props) {
  const { blog: { id, name, website, company: { name: companyName, catchPhrase } } } = props;

  return (
    <Link to={`/blog/${id}`}>
      <div className="blog">
        <div className="title">{name}</div>
        <div className="website">{website}</div>
        <div className="company">
          <div>{companyName}</div>
          <div>{catchPhrase}</div>
        </div>
      </div>
    </Link>
  );
}

// should add propTypes...
