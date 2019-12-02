import React, { Component } from 'react';

import JsonFieldTable from './JsonFieldTable'

import './JsonGroups.css'

class JsonGroups extends Component{
  render(){
    let {id} = this.props.json_group_in[0]

    return(
        <div className="tile is-parent is-half is-shady">
          <article className="tile is-child notification is-white">
            <h3 className="title is-6 json-title">groups</h3>
            <JsonFieldTable json_in={this.props.json_group_in[0]} />
            <code>{id}</code>
          </article>
        </div>
    )
  }
}

export default JsonGroups