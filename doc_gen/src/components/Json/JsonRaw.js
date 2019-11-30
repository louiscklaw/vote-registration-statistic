import React,{Component} from 'react';

import {highlightJson} from '../../common'

import './JsonRaw.css'

class JsonRaw extends Component {
  renNoJsonProvided(){
    return(
      <pre>
        <p>json not found</p>
      </pre>
    )
  }


  renJsonProvided(json_in){
    return(
      JSON.stringify(json_in, null , 1)
    )
  }

  render(){
    return (
      <div className="json-raw-container">
        <div className="tile is-parent is-full is-shady">
          <article className="tile is-child is-white">
            <h3 className="title is-6">JSON RAW</h3>
            <div className="content">
              <div className="json-raw" style={{textAlign:"left", width: '100%'}}>
                {highlightJson(this.renJsonProvided(this.props.JsonContent))}
              </div>
            </div>
          </article>
        </div>
      </div>
    )
  }
}

export default JsonRaw