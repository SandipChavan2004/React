import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className="nav">
        <div className="left">LOGO</div>
        <div className="right">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact-US</a></li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
