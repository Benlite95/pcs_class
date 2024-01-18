import './css/comment.css';
function createComment(comment) {
  const {body, email} = comment;
  return `<div class="comment">
            <div class="body">${body}</div>
            <div class="email">${email}</div>
          </div>`;
}

export default async function loadComments(postId) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    const comments = await response.json();
    return comments.map(comment => createComment(comment));
  } catch (e) {
    return `<div class="error">
        <h4>Unable to load comments<h4>
        <h5>${e.message}</h5>
        </div>`;
  }
}
