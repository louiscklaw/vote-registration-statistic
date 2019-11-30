import React,{Component} from 'react';

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
      <pre>
        {JSON.stringify(json_in, null , 1)}
      </pre>
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

                  {
                    this.props.JsonContent === undefined ? this.renNoJsonProvided() : this.renJsonProvided(this.props.JsonContent)
                  }

              </div>
            </div>
          </article>
        </div>
      </div>
    )
  }
}

export default JsonRaw