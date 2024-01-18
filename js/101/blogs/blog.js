import './css/blog.css';
import setPage from './page';
import $ from 'jquery';
import loadComments from './comments';

async function toggleComments(commentsShowing, comments, id, commentsElem, button) {
  button.textContent = `${commentsShowing ? 'hide' : 'show'} comments`;

  if (commentsShowing) {
    if (!comments) {
      /*const*/ comments = await loadComments(id);
      console.log('loaded comments');
      commentsElem.append(comments);
    }
    console.log('calling slideDown');
    commentsElem.slideDown('fast');
  } else {
    commentsElem.slideUp('slow');
  }

  return comments;
}

function createPost(post) {
  const { id, title, body } = post;
  let commentsShowing = false;
  let comments;

  const postElem = $(`<div class="post">
            <div class="title">${title}</div>
            <div class="body">${body}</div>
            <div class="comments-area">
              <div class="comments">
              </div>
              <button>show comments</button>
            </div>
          </div>`);

  const commentsElem = postElem.find('.comments');
  postElem.find('button').on('click', function () {
    commentsShowing = !commentsShowing;
    comments = toggleComments(commentsShowing, comments, id, commentsElem, this);
  });

  return postElem;
}

let abortController;
export default async function loadBlog(blog) {
  if (abortController) {
    abortController.abort();
  }
  abortController = new AbortController();
  let content;
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${blog.id}`, { signal: abortController.signal });
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    const posts = await response.json();
    content = posts.map(post => createPost(post));
  } catch (e) {
    if (!e.name === 'AbortError') {
      content = `<div class="error">
          <h4>Unable to load blog<h4>
          <h5>${e.message}</h5>
          </div>`;
    } else {
      console.log(`aborted load of blog ${blog.id}`);
    }
  }
  setPage({
    title: blog.name,
    content
  });
}
