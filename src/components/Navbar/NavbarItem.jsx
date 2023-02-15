import React from 'react'

const NavbarItem = (props) => {
    const {nombre_item} = props
  return (
    <li className="nav-item">
        <a className="nav-link">{nombre_item}</a>
    </li>
  )
}

export default NavbarItem