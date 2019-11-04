import React from 'react'
import { NavLink } from 'react-router-dom'

 const NavBar = ({ user }) => {
  return (
    <nav>
      <ul>
        <NavLink to='/'>
          <li>Home</li>
        </NavLink>
        <NavLink to='/login'>
          <li>Login</li>
        </NavLink>
        <NavLink to='/signup'>
          <li>Sign Up</li>
        </NavLink>
        <NavLink to='/create-article'>
          <li>Create Article</li>
        </NavLink>
      </ul>
    </nav>
  )
}

export default NavBar