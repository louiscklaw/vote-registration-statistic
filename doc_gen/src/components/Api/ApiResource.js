import React, { Component } from 'react';

import JsonFieldTable from './JsonFieldTable'

import './ApiResource.css'

class JsonResource extends Component {
  render() {
    let json_in = this.props.json_res_in

    return (
        <div className="tile is-parent is-half is-shady">
          <article className="tile is-child notification is-white">
            <h3 className="title is-6 json-title">resources</h3>
            <JsonFieldTable json_in={json_in} />
          </article>
        </div>

    )
  }
}

export default JsonResource