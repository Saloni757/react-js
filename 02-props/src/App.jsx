import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div class="parent">
      <Card user="Saloni" age={18} img="https://plus.unsplash.com/premium_photo-1733840986122-c6d6d5b36aeb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUyfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=600" />
      <Card user="Vishwa" age={20} img="https://images.unsplash.com/photo-1760341332217-e6c24d1e142c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=600" />
    </div>
  )
}

export default App
