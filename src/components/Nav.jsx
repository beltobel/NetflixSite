
import React, { useEffect, useState } from 'react'
import '../assets/Nav.css'
function Nav() {
    const [show, handleShow] =useState(false);
 
   
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else handleShow(false);
    };

        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
        <img className='nav__logo' 
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" />
        
        <img 
        className='nav__avatar' 
        src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' />

    </div>
  )
}

export default Nav