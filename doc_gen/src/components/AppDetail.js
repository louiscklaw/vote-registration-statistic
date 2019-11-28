import React from 'react';
import {Link, useParams} from 'react-router-dom'

import './AppDetail.css'

export default ({api_name_wanted}) => {
  let {api_name} = useParams();
  return (
    <div className="container">
      <div className="back">
        <Link to='/' className="button">back</Link>
      </div>
      <div className="breadcrumb">

      </div>
      <div className="app-detail">
        <div className="tile is-ancestor">
          <div className="tile is-parent is-8 is-shady">
            <article className="tile is-child notification is-white">
              <p className="title">Murphy's law</p>
              <p className="subtitle">Anything that can go wrong will go wrong</p>
              <div className="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque
                  tortor
                  vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-shady">
            <article className="tile is-child notification is-white">
              <p className="title">Main column</p>
              <p className="subtitle">With some content</p>
              <div className="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque
                  tortor
                  vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  )
}