import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState([10, 20, 30])//({user:"saloni",age:20})

  const btnClicked = () => {
    const newNum = [...num]
    newNum[3] = 40 //neNum.push(40)
    setNum(newNum)
    //ORsetNum(prev=>({...prev, age:50}))
    //batchupdate
    //setNum(prev=>prev+1)
    //setNum(prev=>prev+1)
    //setNum(prev=>(prev+1))



  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClicked}>click</button>
    </div>
  )
}

export default App
