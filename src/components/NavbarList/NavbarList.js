import React from 'react'
import NavbarListElement from '../NavbarListElement/NavbarListElement'
import './NavbarList.css'

const NavbarList = () => {
  return (
    <div>
      <ul class="navButtons">
        <NavbarListElement link = "#container1" text = "Usługi"/>
        <NavbarListElement link = "#container2" text = "Realizacje"/>
        <NavbarListElement link = "#container3" text = "Zadzwoń do nas"/>
      </ul>
    </div>
  )
}

export default NavbarList