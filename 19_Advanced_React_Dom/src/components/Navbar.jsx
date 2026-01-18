import React from 'react'

const Navbar = () => {
  return (
    <div className='flex px-8 py-4 bg-cyan-900 items-center justify-between'>
      <h2 className='text-xl font-bold'>SandipChavan</h2>
      <div className='flex gap-4'>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
    </div>
  )
}

export default Navbar
