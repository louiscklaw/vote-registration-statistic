import React, { Component } from 'react';

import {connect} from 'react-redux'

import {UPDATE_FILTER_TEXT, UPDATE_FOUND_NUMBER} from '../../reducers/ActionType'

import ApiListCard from '../../components/ApiListCard'

import './ApiList.css'

// export default ({all_api_list}) => {
class ApiList extends Component{

  getCard(current_json, open_api){
    return (
      <li className="flex-item" key={open_api}>
        <ApiListCard
          className="api-list-card"
          json_to_list={current_json}
          package_name={open_api}
        />
      </li>
    )
  }

  plaintextSearch(json_in, text_to_search){
    return JSON.stringify(json_in).search(text_to_search)
  }

  filterUsingKeyword(keywords, json_in){
    if (keywords.length > 0){
      try {
        let having_all_keywords = !(keywords
          .map(kword => this.plaintextSearch(json_in, kword) > -1 )
          .includes(false))
          return having_all_keywords
      } catch (err) {
        console.error('error',typeof(keywords))
      }
    }else{
      // TODO: ???
      return true
    }
  }

  componentDidMount(){
    this.props.clear_filter_text()
  }

  render(){
    let {all_api_list, filters } = this.props

    let api_cards = Object.keys(all_api_list)
      .filter( k => { return this.filterUsingKeyword(filters, all_api_list[k]) })
      .map( open_api => {
        // let{groups, organization, resources} = all_api_list[open_api].result

        return this.getCard(all_api_list[open_api], open_api)
      })
      .sort()

    this.props.update_api_found(api_cards.length)

    return (
      <div className="container">
        <div>
          <ul className="flex-container wrap">
            {api_cards}
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    filters: state.filters,
    found_api_number: state.found_api_number
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clear_filter_text: () => dispatch({type: UPDATE_FILTER_TEXT, text:''}),
    update_api_found: (found_num) => dispatch({type: UPDATE_FOUND_NUMBER, found_num_in: found_num})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ApiList)