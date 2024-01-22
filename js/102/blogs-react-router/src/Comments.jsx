import { useEffect, useState } from 'react'
import Comment from './Comment';

export default function Comments({ postId }) {
  const [comments, setComments] = useState();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
        setComments(await response.json());
      } catch (e) {
        console.error(e);
      }
    })();
  }, [postId]);

  return (
    <>
      { comments?.map(c => <Comment key={c.id} comment={c} />) }
    </>
  )
}
