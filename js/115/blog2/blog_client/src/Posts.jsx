import { useEffect, useState } from 'react';
import Post from './Post';

export default function Posts() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('http://localhost:8080/');
        const posts = await response.json();
        console.log(posts);
        setPosts(posts);
      } catch(err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <div>
      {posts?.map(post => <Post post={post}/>)}
    </div>
  )
}
