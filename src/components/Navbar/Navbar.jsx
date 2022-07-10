import React, { useState } from 'react'
import { Nav, NavLink } from './NavbarElements'
import { BiHomeHeart, BiMessageDetail } from 'react-icons/bi'
import { RiUserHeartLine } from 'react-icons/ri'
import { GiSpellBook } from 'react-icons/gi'
import { AiOutlineStar } from 'react-icons/ai'

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <>
      <Nav>
          <NavLink href="#"
              onClick={() => setActiveNav("#")} 
              className={activeNav === "#" ? "active" : ""}>  
            <BiHomeHeart />
          </NavLink>
          <NavLink href="#about" 
              onClick={() => setActiveNav("#about")} 
              className={activeNav === "#about" ? "active" : ""}>  
            <RiUserHeartLine />
          </NavLink>
          <NavLink href="#experience"
              onClick={() => setActiveNav("#experience")} 
              className={activeNav === "#experience" ? "active" : ""}>  
            <AiOutlineStar />
          </NavLink>
          <NavLink href="#portfolio"
              onClick={() => setActiveNav("#portfolio")} 
              className={activeNav === "#portfolio" ? "active" : ""}>  
            <GiSpellBook />
          </NavLink>
          <NavLink href="#contact"
              onClick={() => setActiveNav("#contact")} 
              className={activeNav === "#contact" ? "active" : ""}>  
            <BiMessageDetail />
          </NavLink>
      </Nav>
    </>
  )
}

export default Navbar