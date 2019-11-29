import React, { Component } from 'react';

import JsonFieldTable from './JsonFieldTable'

import './JsonResources.css'

class JsonResources extends Component {
  render() {
    let json_in = this.props.json_res_in[0]

    return (
      <div className="tile is-parent is-4 is-shady">
        <article className="tile is-child notification is-white">
          <h3 className="title is-3 json-title">resources</h3>
          <JsonFieldTable json_in={json_in} />
        </article>
      </div>
    )
  }
}

export default JsonResources