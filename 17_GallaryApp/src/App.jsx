import React, { useEffect, useState } from 'react'
import axios, {Axios} from "axios";
const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () =>{
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=28`);
    setUserData(response.data)
  }

  useEffect(function(){
    getData();
  },[index])

  let printUserData = <div className='flex flex-col items-center'>
    <h1 className='text-gray-700'>Loading...</h1>
    </div>

  if(userData.length > 0){
    printUserData = userData.map(function(elem, idx){

      return <div>
        <div className='h-54 w-78 overflow-hidden bg-white rounded-xl'>
          <img className='h-full w-full object-cover' src={elem.download_url} alt="images" />
        </div>
      </div>;
    })
  }
  return (
    <div onClick={getData} className='bg-black h-screen w-full flex-col overflow-auto p-4 text-white'>
      <div className='flex flex-wrap gap-4 justify-center items-center'>
        {printUserData}
      </div>

      <div className='flex justify-center items-center  p-4 gap-6'>
        <button className='bg-amber-400 text-black text-sm cursor-pointer px-4 py-2 rounded-xl active:scale-95 ' onClick={
          ()=>{
            if(index > 1){
              setIndex(index - 1);
              setUserData([]);
            }
          }
        }>Prev</button>
        <h3>Page{index}</h3>
        <button className='bg-amber-400 text-black text-sm cursor-pointer px-4 py-2 rounded-xl active:scale-95' onClick={
          ()=>{
            setUserData([]);
            setIndex(index + 1);
          }
        }>Next</button>
      </div>
    </div>

  )
}

export default App
