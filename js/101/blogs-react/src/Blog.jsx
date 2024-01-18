import { useEffect, useState } from 'react'
import Post from './Post';

export default function Blog({ selectedBlog }) {
  const [posts, setPosts] = useState();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${selectedBlog}`);
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
        setPosts(await response.json());
      } catch (e) {
        console.error(e);
      }
    })();
  }, [selectedBlog]);

  return (
    <>
      {posts?.map(post => <Post key={post.id} post={post} />)}
    </>
  )
}

// should add propTypes...
