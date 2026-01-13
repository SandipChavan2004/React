import React from 'react'

const App = () => {
  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input onChange={(elem)=>{
        console.log(elem.target.value);
        
      }} type="text" placeholder='Enter your text'/>
    </div>
  )
}

export default App
