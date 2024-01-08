import { useState, useEffect } from 'react';
import './App.css';
import myUseForm, { foo as x } from './UseForm';

function App() {
  const [state, setState] = useState(JSON.parse(localStorage.getItem('settings')) || {
    color: '#FF0000',
    backgroundColor: '#00FF00',
    fontFamily: 'cursive'
  });

  /*useEffect(() => {
    localStorage.setItem('settings', JSON.stringify(state));
  }, [state]);*/

  function handleChange(e) {
    const newState = {
      ...state,
      [e.target.name]: e.target.value
    };

    setState(newState);

    const history = JSON.parse(localStorage.getItem('history')) || [];
    history.push(newState);
    localStorage.setItem('history', JSON.stringify(history));

    localStorage.setItem('settings', JSON.stringify(newState));
  }

  /*const [state, handleChange] = myUseForm({
    color: '#FF0000',
    backgroundColor: '#00FF00',
    fontFamily: 'cursive'
  });*/

  console.log(x);

  return (
    <div style={state}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem deleniti reprehenderit aliquid iure odio, cupiditate exercitationem optio consequatur nesciunt, natus repudiandae porro explicabo voluptates aspernatur!

      <form>
        color: <input type="color" value={state.color} name="color" onChange={handleChange} />
        bgcolor: <input type="color" value={state.backgroundColor} name="backgroundColor" onChange={handleChange} />
        font: <select value={state.fontFamily} name="fontFamily" onChange={handleChange}>
          <option>sans-serif</option>
          <option>serif</option>
          <option>monospace</option>
          <option>fantasy</option>
          <option>cursive</option>
        </select>
      </form>
    </div>
  )

  /*
  const [color, setColor] = useState('#FF0000');

  const [backgroundColor, setBackgroundColor] = useState('#00FF00');

  const [fontFamily, setFontFamily] = useState('cursive');

  /*function handleColorChange(e) {
    setColor(e.target.value);
  }

  function handleBackgroundColorChange(e) {
    setBackgroundColor(e.target.value);
  }

  function handleFontFamilyChange(e) {
    setFontFamily(e.target.value);
  }* /

  return (
    <div style={{
      color,
      backgroundColor,
      fontFamily
    }}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem deleniti reprehenderit aliquid iure odio, cupiditate exercitationem optio consequatur nesciunt, natus repudiandae porro explicabo voluptates aspernatur!

      <form>
        color: <input type="color" value={color} name="color" onChange={e => setColor(e.target.value)} />
        bgcolor: <input type="color" value={backgroundColor} name="backgroundColor" onChange={e => setBackgroundColor(e.target.value)} />
        font: <select value={fontFamily} name="fontFamily" onChange={e => setFontFamily(e.target.value)}>
          <option>sans-serif</option>
          <option>serif</option>
          <option>monospace</option>
          <option>fantasy</option>
          <option>cursive</option>
        </select>
      </form>
    </div>
  )*/
}

export default App
