import React from 'react';
import {NavLink} from 'react-router-dom'

export default () => {
  return (
     <ul>
       <li className="is-active"><a>Home</a></li>
       <li><a>Examples</a></li>
       <li><a>Features</a></li>
       <li><a>Team</a></li>
       <li><NavLink to="about">About</NavLink></li>
     </ul>
  )
}