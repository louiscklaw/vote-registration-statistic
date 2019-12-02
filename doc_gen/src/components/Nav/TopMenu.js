import React, { Component } from 'react';

import {Link, NavLink} from 'react-router-dom'

import {checkDevelop} from '../../common'

import './TopMenu.css'

class TopMenu extends Component{
  genTestLink(){
    if (checkDevelop())
    return(
      <li>
        <Link to="/testpage">TestPage</Link>
      </li>
    )
  }

  render(){
    return (
      <ul>
        <li>
          <Link to="/">主頁</Link>
        </li>
        <li>
          <Link to="/stat">統計</Link>
        </li>
        <li>
          <Link to="/about">關於我</Link>
        </li>

        {this.genTestLink()}

      </ul>
    )
  }
}

export default TopMenu