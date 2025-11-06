import React from 'react'

const App = () => {
  function inputChanging(val) {
    console.log(val);
  }
  const pageScrolling = (elem) => {
    console.log('scrolling....at speed', elem);
  }


  return (
    <div onWheel={(elem) => {
      console.log();
      pageScrolling(elem.deltaY)

    }}>

      <button onClick={() => {
        console.log('Button Clicked');
      }}>Click here</button>

      <input onChange={function (elem) {
        inputChanging(elem.target.value)
      }} type="text" placeholder='Enter Name' />

      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
    </div>
  )
}

export default App
