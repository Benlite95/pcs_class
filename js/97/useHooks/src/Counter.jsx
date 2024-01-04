import { useState, useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export default function Counter() {
  /*const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);*/
  /*const [state, setState] = useState(() => {
    return JSON.parse(localStorage.getItem('count')) || {
      count: 0,
      count2: 0,
      foo: 5
    };
  });*/
  const [state, setState] = useLocalStorage('count', {
    count: 0,
    count2: 0,
    foo: 5
  });

  /*useEffect(() => {
    console.log('in useEffect callback');

    //document.title = `You clicked ${state.count} times`;
    document.title = `You clicked ${count} ${count2} times`;
  }, [count, count2]);*/

  useEffect(() => {
    console.log('in useEffect callback');

    //document.title = `You clicked ${state.count} times`;
    document.title = `You clicked ${state.count} ${state.count2} times`;

    //setTimeout(() => setState({ ...state, foo: 6 }), 10000);

    //localStorage.setItem('count', JSON.stringify(state));
  }, [state]);

  const [i, setI] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      console.log(`${i}`);
      setI(i + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div>
      <button onClick={() => setState({
        ...state,
        count: state.count + 1
      })}>{state.count}</button>
      <button onClick={() => setState({
        ...state,
        count2: state.count2 + 1
      })}>{state.count2}</button>
    </div>
  )

  /*return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <button onClick={() => setCount2(count2 + 1)}>{count2}</button>
    </div>
  )*/
}
