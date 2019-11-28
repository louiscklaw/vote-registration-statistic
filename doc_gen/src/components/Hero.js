import React from 'react';

import Nav from './Nav'

import './Hero.css'

export default (props) => {

  function showSearchInput(show_in) {
    if(show_in){
      return (
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">香港統計數字一覽</h1>
            <p>{props.location}</p>
            <p class="control has-icons-left">
              <input class="input is-rounded is-large" type="text" placeholder="Search" />
              <span class="icon is-small is-left">
                <i class="fas fa-binoculars"></i>
              </span>
            </p>

          </div>
        </div>
      )
    }else{
      return (
        <div>
          <div className="hero-body-empty">
          </div>
        </div>
      )
    }
  }

  return (
    <section className="hero is-info is-medium is-bold">
      <div className="hero-head">
        <Nav />
      </div>
      { showSearchInput(props.show_search_input)}
    </section>

  )
}