// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [error, setError] = React.useState(null)

  const usernameInputRef = React.useRef()
  function handleSubmit(event) {
    const value = usernameInputRef.current.value
    event.preventDefault()
    onSubmitUsername(value)
  }

  function handleChange(event) {
    const {value} = event.target
    const isLowerCase = value.toLowerCase() === value
    setError(isLowerCase ? null : 'Username must be lower case')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          ref={usernameInputRef}
          id="username"
          type="text"
          onChange={handleChange}
        />
      </div>
      <div style={{color: 'red'}}>{error}</div>
      <button type="submit" disabled={Boolean(error)}>
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
