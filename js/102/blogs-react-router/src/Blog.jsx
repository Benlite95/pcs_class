import Post from './Post';
import { Link, useLoaderData } from 'react-router-dom';

export default function Blog() {
  const posts = useLoaderData();
  return (
    <>
      {posts?.map(post => <Post key={post.id} post={post} />)}
      <hr />
      <Link to="/blog/5">check out this great blog</Link>
      <br />
      <Link to="/blog/6">also check out this great blog</Link>
    </>
  )
}

// should add propTypes...

export async function loader(routeStuff) {
  const { id } = routeStuff.params;
  /*try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    return await response.json();
  } catch (e) {
    console.error(e);
  }*/
  return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
}
