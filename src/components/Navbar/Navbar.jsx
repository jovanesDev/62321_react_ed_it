import React from 'react'
import { navlinks } from './config'
import {NavLink} from 'react-router-dom'

const Navbar = () => {

  

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
    <div className="container-fluid">
      <span className="navbar-brand">Navbar</span>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
         {navlinks.map(({name,path},index)=> (
            <NavLink key={index} className={'btn'} to={path}>{name}</NavLink>
         ))}
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar