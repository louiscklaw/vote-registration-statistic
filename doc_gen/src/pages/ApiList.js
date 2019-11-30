import React, { Component } from 'react';

import {connect} from 'react-redux'

import ApiListCard from '../components/ApiListCard'

import './ApiList.css'

// export default ({all_api_list}) => {
class ApiList extends Component{

  getCard(current_json, open_api){
    return (
      <li className="flex-item" key={open_api}>
        <ApiListCard json_to_list={current_json} package_name={open_api} />
      </li>
    )
  }

  plaintextSearch(json_in, text_to_search){
    return JSON.stringify(json_in).search(text_to_search)
  }

  filterUsingKeyword(keyword_string, json_in){
    let found = false
    keyword_string
      .split(' ')
      .forEach( kword => {
        if ( this.plaintextSearch( json_in, kword ) > -1 ) {
          found = true
        }
      } )
    return found
  }

  render(){
    let all_api_list = this.props.all_api_list
    let filter_by_text = this.props.filter_by_text

    let api_detail_cards = Object.keys(all_api_list)
      .filter( k => { return this.filterUsingKeyword(filter_by_text, all_api_list[k]) })
      .map( open_api => {
        // let{groups, organization, resources} = all_api_list[open_api].result

        let single_json = all_api_list[open_api]
        return this.getCard(single_json, open_api)
    })

    return (
      <div className="container">
        <div>
          <ul className="flex-container wrap">
            {api_detail_cards}
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    filter_by_text: state.filter_by_text
  }
}

export default connect(mapStateToProps)(ApiList)