import React, { Component } from 'react';

import {randomId} from '../../common'

import ApiResource from './ApiResource'

import JsonResourceTryout from '../Api/SampleCode/JsonResourceTryout'
import CsvResourceTryout from '../Api/SampleCode/CsvResourceTryout'
import XMLResourceTryout from '../Api/SampleCode/XMLResourceTryout'
import ResourceTryoutNotFound from '../Api/SampleCode/ResourceTryoutNotFound'

import './ApiResources.css'

class JsonResources extends Component {

  checkResourceFormat(json_in){
    return json_in.format
  }

  renTestCall(json_in){
    switch(this.checkResourceFormat(json_in)){
      case "JSON":
        return (
          <JsonResourceTryout json_res_in={json_in} />
        )
      case "CSV":
        return (
          <CsvResourceTryout json_res_in={json_in} />
        )

      case "XML":
        return (
          <XMLResourceTryout json_res_in={json_in} />
        )
      default:
        return (
          <ResourceTryoutNotFound json_res_in={json_in} />
        )
    }
  }

  renJsonResource(json_in){

    return (
      <div className="tile is-ancestor" key={randomId()}>
        <ApiResource json_res_in={json_in} />
        {this.renTestCall(json_in)}
      </div>
    )
  }

  render() {
    let json_res = this.props.json_res_in

    return (
      <div className="json-resources">
        {
          json_res.map( json => this.renJsonResource(json) )
        }
      </div>

    )
  }
}

export default JsonResources