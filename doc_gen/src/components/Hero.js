import React, { Component } from 'react';

import {connect} from 'react-redux'
import {UPDATE_FILTER_TEXT, UPDATE_IS_SEARCHING} from '../reducers/ActionType'

import { withRouter } from "react-router";
import { compose } from "redux";


import Nav from './Nav'

import './Hero.css'

class Hero extends Component{
  constructor(){
    super()
    this.state={
      searchbox_text:''
    }
  }


  handleUserInputFilterText(user_input){
    // if (user_input.length > 0 ){
    //   this.props.updateIsSearching(true)
    // }else{
    //   this.props.updateIsSearching(false)
    // }

    return user_input.split(' ')
      .filter( x => x.trim() != '')
  }

  handleOnChange(e){
    this.props.updateSearchFilter(this.handleUserInputFilterText(e.target.value))

  }

  getTotalApiCount(){
    let api_found_in_dictionary = Object.keys(this.props.api_dictionary).length
    return api_found_in_dictionary
  }

  showApiFound(){
    let api_found_with_criteria = this.props.found_api_number
    if (api_found_with_criteria > 0 && this.props.isSearching){
      return (
        `, ${api_found_with_criteria} api found`
      )
    }else{
      return (``)
    }
  }

  componentDidMount(){
    console.log('hero.js componentDidMount')

  }


  showSearchInput(show_in) {
    if(show_in){


      return (
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">香港統計數字</h1>
            <p className="control has-icons-left">
              <input
                id="search_input"
                className="input is-rounded is-large"
                type="text"
                placeholder="Search"
                onChange={(e)=>{this.handleOnChange(e)}}
                value={this.props.search_string}
                />

              <span className="icon is-small is-left">
                <i className="fas fa-binoculars"></i>
              </span>
            </p>
            <p className="subtitle is-6 total-api-count">
              {this.getTotalApiCount()} API in dictionary{this.showApiFound()}
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
    posts: state.posts,
    api_dictionary: state.api_dictionary,
    found_api_number: state.found_api_number,
    isSearching: state.isSearching,
    search_string: state.search_string
  }
}

const mapDispatchToProps = (dispatch)  =>{
  return {
    updateSearchFilter: (text) => {
      dispatch({type: UPDATE_FILTER_TEXT, text})
    }
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Hero)