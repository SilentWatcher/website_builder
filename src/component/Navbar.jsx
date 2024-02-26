import React from 'react'
import { useState } from 'react';
import '../style/Navbar.css'


function Navbar() {

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <div className='navbar'>
        <div className='searchbar'>
        <span className="material-symbols-outlined">search</span>

        </div>
        <ul className='links'>
            <a href="">Categories</a>
            <a href="">Website Builders </a>
            <a href="">Today's deals</a>
        </ul>
        <div className='menu_btn' onClick={toggleMenu}  >
        <span className="material-symbols-outlined">menu</span>
        </div>

        {isMenuOpen && (
        <div className="menu_items">
          {/* Your menu items go here */}
          <a href="">Categories</a>
          <a href="">Website Builders </a>
          <a href="">Today's deals</a>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
      )}
        
        
    </div>
  )
}

export default Navbar