import { useEffect, useState } from 'react'
import Post from './Post';
import { Link, useParams } from 'react-router-dom';
// import Error from './Error';

export default function Blog() {
  const [posts, setPosts] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const { id: selectedBlog } = useParams();

  useEffect(() => {
    const abortController = new AbortController();

    (async () => {
      try {
        setLoading(true);
        setError();
        setPosts();

        const response = await fetch(`https://jsonplaceholder.typicode.com/xposts?userId=${selectedBlog}`, { signal: abortController.signal });
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
        setPosts(await response.json());
      } catch (e) {
        console.error(e);
        if (!e.name === 'AbortError') {
          setError(e.message);
        }
      }

      setLoading(false);
    })();

    return () => {
      abortController.abort();
    }
  }, [selectedBlog]);

  return (
    <>
      {loading && <h5>Loading...</h5>}
      {error && <div>error!!!</div> /*<Error error={error} />*/}
      {posts?.map(post => <Post key={post.id} post={post} />)}
      <hr />
      <Link to="/blog/5">check out this great blog</Link>
      <br />
      <Link to="/blog/6">also check out this great blog</Link>
    </>
  )
}

// should add propTypes...
