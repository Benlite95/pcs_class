import React from 'react'

export default function Logout({ username, setUsername }) {
  async function logout() {
    try {
      const response = await fetch('http://localhost:8080/logout', {
        method: 'POST',
        credentials: 'include'
      });

      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      setUsername();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>Logged in as {username} <button onClick={logout}>logout</button></div>
  )
}
