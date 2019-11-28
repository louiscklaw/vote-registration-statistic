import React from 'react';
import {NavLink} from 'react-router-dom'

export default () => {
  return (
    <ul>

      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="about">About</NavLink>
      </li>

    </ul>
  )
}