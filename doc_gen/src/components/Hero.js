import React from 'react';

import Nav from './Nav'

export default () => {
  return (
    <section className="hero is-info is-medium is-bold">
      <div className="hero-head">
        <Nav />
      </div>
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">香港統計數字一覽</h1>
          {/* <h2 className="subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </h2> */}
        </div>
      </div>
    </section>

  )
}