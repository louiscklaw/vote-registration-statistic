import React from 'react';

import ApiListCard from '../components/ApiListCard'

import './ApiList.css'

export default ({all_api_list}) => {

  let api_detail_cards = Object.keys(all_api_list)
    .map( open_api => {
      let current_json = all_api_list[open_api]
      return (
        <li className="flex-item" key={open_api}>
          <ApiListCard json_to_list={current_json} package_name={open_api} />
        </li>
      )
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