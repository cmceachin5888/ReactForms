import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Form = () => {
  const [username, setUsername] = useState ('');
  const handleSubmit = (event) => {
    event.preventDefault()
    setUsername('')
    const username = event.target.username.value
  
  const handleChange = (event) => {
      setUsername(event.target.value)
    }
    console.log(username)
  }
  return (
    <div id='container'>
      <div id='navbar'>
        Form.js
      </div>
      <form className='logIn-form' onSubmit={handleSubmit}>
        <label htmlFor='username'>Username:</label>
        <input type='text' name='username' value={username}
        onChange={handleChange} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}


ReactDOM.render(
  <Form />,
  document.getElementById('app')
)