import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './Header';
//import RecipeDetails2 from './RecipeDetails2';
//import {useState} from 'react';

export default function App() {
  //const [id, setId] = useState(1);

  return (
    <div className="container text-center">
      <Header />
      <Outlet />

      {/*<input value={id} onChange={e => setId(e.target.value)}/>
      <RecipeDetails2 id={id}/>*/}
    </div>
  );
}
