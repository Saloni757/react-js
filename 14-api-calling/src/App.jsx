import axios from 'axios'
import { useState } from 'react'

const App = () => {

  const [data, setData] = useState([])

  /*

 // function to fetch data from an API
 async function getData() {
   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
   console.log(response)
 }
 
 // arrow function to fetch data from an API
 const fetchData = async () => {
 const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
 console.log(response)
}

 // fetch data by using .then() method
 function fetchDataWithThen() {
   fetch('https://jsonplaceholder.typicode.com/todos/1')
     .then(response => {
       console.log(response)
})}

 */

  // fetch data using axios
  const getData = async () => {

    const response = await axios.get('https://picsum.photos/v2/list')

    setData(response.data)
  }


  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map(item => (
          <div key={item.id}>
            <p>{item.author}</p>
            <img src={item.download_url} alt={item.author} width="200" />
          </div>
        ))}
      </div>

    </div>
  )
}

export default App
