import React from 'react'

const App = () => {

  const data = {
    name: 'Saloni',
    age: 20,
    city: 'Pune'
  }

  // Store data in localStorage
  localStorage.setItem('userData', JSON.stringify(data))

  // Retrieve data from localStorage
  const retrievedData = JSON.parse(localStorage.getItem('userData'))
  console.log(retrievedData)

  return (
    <div>
      <h1>LocalStorage Example</h1>
    </div>
  )
}

export default App
