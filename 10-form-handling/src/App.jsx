import React from 'react'

const App = () => {

  const submitHandler = (e) => {
    e.preventDefault()
    console.log("form submitted")
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder='Enter your name' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
