import { useState } from 'react';

export default function CounterF() {
  /*const [count, setCount] = useState(11);
  const [count2, setCount2] = useState(2);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <button onClick={() => setCount2(count2 + 1)}>{count2}</button>
    </>
  )*/

  const [state, setState] = useState({
    count: 11,
    count2: 2
  });

  return (
    <>
      <button onClick={() => setState({ ...state, count: state.count + 1 })}>{state.count}</button>
      <button onClick={() => setState({ ...state, count2: state.count2 + 1 })}>{state.count2}</button>
    </>
  )
}
