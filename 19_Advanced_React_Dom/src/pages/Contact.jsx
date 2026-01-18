import React from 'react'
import { Link, Outlet } from "react-router-dom";
const Contact = () => {
  return (
    <div>
      <h1 className='mask-conic-from-neutral-950'>Contact</h1>
      <div className='flex justify-center items-center gap-8'>
        <Link to='/contact/mens'>Mens</Link>
        <Link to='/contact/womens'>Womens</Link>
      </div>
      <Outlet />
    </div>
  )
}

export default Contact
