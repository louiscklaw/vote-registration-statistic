import React from 'react';

export default () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="../">
            {/* <img src="http://bulma.io/images/bulma-type-white.png" alt="Logo" /> */}
            <h3 className="title is-3">LouisLabs</h3>
          </a>
          <span className="navbar-burger burger" data-target="navbarMenu">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenu" className="navbar-menu">
          <div className="navbar-end">
            <div className="tabs is-right">
              {/* <ul>
                <li className="is-active">Home</li>
                <li>Examples</li>
                <li>Features</li>
                <li>Team</li>
                <li>Help</li>
              </ul> */}
              <span className="navbar-item">
                <a className="button is-white is-outlined"
                  href="https://github.com/louiscklaw/vote-registration-statistic">
                  <span className="icon">
                    <i className="fab fa-github"></i>
                  </span>
                  <span title="Hello from the other side">View Source</span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}