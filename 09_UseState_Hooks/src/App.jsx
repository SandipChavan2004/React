// import React, { useState } from 'react'

// const App = () => {

//   const [num, setNum] = useState(10);
  
//   function changeNum(){
//     setNum(100);
//   }

//   return (
//     <div>
//       <h1>The Number is {num}</h1>
//       <button onClick={changeNum}>click</button>
//     </div>
//   )
// }

// export default App

import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0);
  function Increase(){
    setNum(num+1);
  }
  function Decrease(){
    setNum(num-1);
  }
  function JumpBy5(){
    setNum(num+5);
  }
  function Reset(){
    setNum(0);
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={Increase}>Increase</button>
      <button onClick={Decrease}>Decrease</button>
      <button onClick={JumpBy5}>Increase by 5</button>
      <button onClick={Reset}>Reset</button>
    </div>
  )
}

export default App


