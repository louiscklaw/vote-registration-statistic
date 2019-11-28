import React from 'react';

// import AHref from './AHref'
// import Card from './Card'

import ApiDetailCard from './ApiDetailCard'

import './Content.css'

// import Intro from './Intro'
// import Tile from './Tile'
// import TileThirdColumn from './TileThirdColumn'

export default ({all_api_list}) => {
  let api_detail_cards = Object.keys(all_api_list)
    .map( open_api => {
    return (
      <li className="flex-item" key={open_api}>
        <ApiDetailCard package_to_check={open_api} />
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

        {/* <ul class="flex-container wrap">
          <li class="flex-item">1</li>
          <li class="flex-item">2</li>
          <li class="flex-item">3</li>
          <li class="flex-item">4</li>
          <li class="flex-item">5</li>
          <li class="flex-item">6</li>
          <li class="flex-item">7</li>
          <li class="flex-item">8</li>
        </ul> */}


      {/* <Intro /> */}
      {/* <div className="sandbox">
        <div className="tile is-ancestor">
          <Tile />
          <Tile />
          <TileThirdColumn />
        </div>
      </div> */}
    </div>
  )



}