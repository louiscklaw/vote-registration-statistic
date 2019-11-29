import React, { Component } from 'react';

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

  filterUsingKeyword(keywords, json_in){
    let {result, groups, organization} = json_in
    let found = false
    keywords.forEach( kword => {
      if (this.plaintextSearch(json_in, kword)> -1){
        found=true
      }
    })
    return found
  }

  render(){
    let all_api_list = this.props.all_api_list


    let api_detail_cards = Object.keys(all_api_list)
      .filter( k => { return this.filterUsingKeyword(['數碼'], all_api_list[k]) })
      .map( open_api => {
        let{groups, organization, resources} = all_api_list[open_api].result

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

export default ApiList