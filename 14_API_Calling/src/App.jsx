import React from 'react'
import axios, {Axios} from "axios";

const App = () => {

  // async function getData(){
  //   const response =await fetch('https://jsonplaceholder.typicode.com/todos/1');
  //   console.log(response);
  // }

  const getData = async() =>{
    // const response =await fetch('https://jsonplaceholder.typicode.com/users');
    // console.log(response);

    // const data = await response.json();
    // console.log(data);

    const {data} = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(data);
  }

  return (
    <div>
      <button onClick={getData}>Get Data</button>
    </div>
  )
}

export default App
