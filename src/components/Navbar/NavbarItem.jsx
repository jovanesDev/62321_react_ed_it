import React from 'react'
import { NavLink } from 'react-router-dom'

const NavbarItem = (props) => {
    const {nombre_item,path} = props

    const activeStyle = {color:'red'}
  return (
    <li className="nav-item">
        <NavLink className={'nav-link'} style={({isActive}) => isActive ? activeStyle : null } to={path} >{nombre_item}</NavLink>
    </li>
  )
}

export default NavbarItem