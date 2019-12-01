import React, { Component } from 'react';

import {connect} from 'react-redux'
import {UPDATE_FILTER_TEXT, UPDATE_IS_SEARCHING} from '../reducers/ActionType'

import Nav from './Nav'

import './Hero.css'

class Hero extends Component{

  handleUserInputFilterText(e){
    let user_input = e.target.value

    if (e.target.value.length > 0 ){
      this.props.updateIsSearching(true)
    }else{
      this.props.updateIsSearching(false)
    }

    return user_input.split(' ')
      .filter( x => x.trim() != '')
  }

  handleOnChange(e){
    this.props.update_text(this.handleUserInputFilterText(e))
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
    isSearching: state.isSearching
  }
}

const mapDispatchToProps = (dispatch)  =>{
  return {
    update_text: (text) => {
      dispatch({type: UPDATE_FILTER_TEXT, text})
    },
    updateIsSearching: (is_searching) => {
      dispatch({type: UPDATE_IS_SEARCHING, is_searching})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hero)