import React, {Component} from 'react';

import JsonFieldTable from './JsonFieldTable'

import './JsonOrganization.css'

class JsonOrganization extends Component{
  render(){
    let json_in = this.props.json_org_in

    let {description, name, title, id} = json_in

    return(
      <div className="tile is-parent is-shady">
        <article className="tile is-child notification is-white">
          <h3 className="title is-3 json-title">organization</h3>

          <JsonFieldTable json_in={json_in}/>
        </article>
      </div>
    )
  }
}

export default JsonOrganization