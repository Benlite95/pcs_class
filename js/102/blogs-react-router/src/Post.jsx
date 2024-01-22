import { useState } from 'react';
import './Post.css';
import Comments from './Comments';

export default function Post(props) {
  const { id, title, body } = props.post;
  const [commentsShowing, setCommentsShowing] = useState();

  return (
    <div className="post">
      <div className="title">{title}</div>
      <div className="body">{body}</div>
      <div className="comments-area">
        <div className={`comments ${commentsShowing ? '' : 'closed'}`}>
          {/*commentsShowing &&*/ <Comments postId={id} />}
        </div>
        <button onClick={() => setCommentsShowing(!commentsShowing)}>{commentsShowing ? 'hide' : 'show'} comments</button>
      </div>
    </div>
  )
}

// should add propTypes...
