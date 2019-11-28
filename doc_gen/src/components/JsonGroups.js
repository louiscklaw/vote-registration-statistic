import React, { Component } from 'react';

import './JsonGroups.css'

class JsonGroups extends Component{
  render(){
    return(
      <div className="tile is-parent is-shady">
        <article className="tile is-child notification is-white">
          <h3 className="title is-3 json-title">groups</h3>

          <h3 className="title is-6">{`name`}</h3>
          <h3 className="title is-6">{`title`}</h3>
          <h3 className="title is-6">{`description`}</h3>
          <code>{`id`}</code>
          <a >opendata@clp.com.hk</a>
        </article>
      </div>
    )
  }
}

export default JsonGroups