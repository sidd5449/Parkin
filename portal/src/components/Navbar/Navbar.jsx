import React from 'react';
import {FiUser} from 'react-icons/fi';
import './Navbar.scss'

const Navbar = () => {
  return (
    <div className="app__navbar">
      <a href="/"><h2>LOGO</h2></a>
      <FiUser size={25} color="#fff" />
    </div>
  )
}

export default Navbar