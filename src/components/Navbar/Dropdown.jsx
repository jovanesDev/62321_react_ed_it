import React from 'react'
import NavbarItem from './NavbarItem';

const Dropdown = (props) => {
  const { list_arr,dropdown_name } = props;
  return (
    <li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
     {dropdown_name}
    </a>
    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        {list_arr?.length > 0 && list_arr.map((nombre) => (
            <NavbarItem nombre_item={nombre}/>
        ))}
    </ul>
  </li>
  )
}

export default Dropdown