import React from 'react'

const App = () => {

    const user = {
      name: 'Sandip',
      age: 21,
      city: 'Karad'
    }

    localStorage.setItem('user', JSON.stringify(user))
  
  return (
    <div>
      Hello
    </div>
  )
}

export default App
