import React, { Component } from 'react';
import { compose } from 'redux';

import {connect} from 'react-redux'
import { withRouter } from "react-router";
import ScrollToTop from '../../components/browser/ScrollToTop';
import Hero from '../../components/Hero';

import {UPDATE_FILTER_TEXT} from '../../reducers/ActionType'

import ApiList from '../../pages/ApiList/ApiList'

class FilterByTags extends Component{
  constructor(){
    super()
    this.state = {

    }
  }
  render(){
    let {filter_by_tags} = this.props.match.params
    this.props.updateSearchFilter(filter_by_tags)
    return(
      <div>
        <ScrollToTop />
        <Hero show_search_input={true}  />
        <div className="app-main">
          <section className="section">
            <ApiList all_api_list={this.props.all_api_manifest} ></ApiList>
          </section>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    all_api_manifest: state.api_dictionary
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateSearchFilter: (text) => {
      dispatch({type: UPDATE_FILTER_TEXT, text})
    }
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(FilterByTags)