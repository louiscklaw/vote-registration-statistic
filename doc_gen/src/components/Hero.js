import React, { Component } from 'react';

import {connect} from 'react-redux'

import Nav from './Nav'

import './Hero.css'

class Hero extends Component{

  handleOnChange(e){
    this.props.update_text(e.target.value)
  }

  showSearchInput(show_in) {
    if(show_in){
      return (
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">香港統計數字一覽</h1>
            <p className="control has-icons-left">
              <input className="input is-rounded is-large" type="text" placeholder="Search" onChange={(e)=>{this.handleOnChange(e)}} />
              <span className="icon is-small is-left">
                <i className="fas fa-binoculars"></i>
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
  render(){
    return (
      <section className="hero is-info is-medium is-bold">
        <div className="hero-head">
          <Nav />
        </div>
        { this.showSearchInput(this.props.show_search_input)}
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = (dispatch)  =>{
  return {
    update_text: (text) => {dispatch({type: 'update_text', text})}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hero)