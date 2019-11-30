import React from 'react';
import {NavLink} from 'react-router-dom'

export default () => {
  return (
    <ul>
      <li> <NavLink to="/">主頁</NavLink> </li>
      <li> <NavLink to="/stat">統計</NavLink> </li>
      <li> <NavLink to="/about">關於我</NavLink> </li>
    </ul>
  )
}