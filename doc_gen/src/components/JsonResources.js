import React, { Component } from 'react';

import './JsonResources.css'

class JsonResources extends Component {
  render() {
    let json_in = this.props.json_res_in

    let {name, description} = json_in[0]

    return (
      <div className="tile is-parent is-4 is-shady">
        <article className="tile is-child notification is-white">
          <h3 className="title is-3 json-title">resources</h3>

          <p className="title is-6">{name}</p>

          <div className="tags">
            <span className="tag is-info">Info</span>
          </div>

          <h6 className="subtitle is-6">highlight</h6>
          <p className="content">{description}</p>

          <p className="content">
            "approval_status": "approved"
          </p>

          <code>print('helloworld')</code>

        </article>
      </div>
    )
  }
}

export default JsonResources