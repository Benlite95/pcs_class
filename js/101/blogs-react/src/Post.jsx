import './Post.css';

export default function Post(props) {
  const { title, body } = props.post;

  return (
    <div className="post">
      <div className="title">{title}</div>
      <div className="body">{body}</div>
    </div>
  )
}

// should add propTypes...
