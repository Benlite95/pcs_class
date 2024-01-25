import { useState } from "react";
import Person from "./Person";

interface WelcomeProps {
  person: Person
}

export default function Welcome(props: WelcomeProps) {
  const {first, last} = props.person;
  const [textShowing, setTextShowing] = useState<boolean>();
  const [user, setUser] = useState<Person>();

  function login() {
    setUser(props.person);
  }

  return (
    <>
      <div>
        Welcome
        {textShowing && <span> {first} {last}!</span>}
        <br/>
        <button onClick={() => setTextShowing(!textShowing)}>{textShowing ? 'hide' : 'show'}</button>

        <hr/>
        <button onClick={() => login()}>login</button>
        {user && <div>logged in as {user.first} {user.last}</div>}
      </div>
    </>
  )
}
