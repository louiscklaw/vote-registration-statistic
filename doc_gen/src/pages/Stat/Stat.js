import React, { Component } from 'react';

import SampleTable from './SampleTable'
import { JsonToTable } from "react-json-to-table";

import {connect} from 'react-redux'

import './Stat.css'

class LastUpdate extends Component{
  render(){
    return(
      <p>last update ?</p>
    )
  }
}

class Stat extends Component{
  getFormats() {
    let formats = {}
    let formats_1 = []
    let in_json = this.props.api_dictionary

    Object.keys( in_json )
      .forEach( k => {
        in_json[ k ].result.resources
          .forEach( r => {
            if ( formats[ r.format ] == undefined ) {
              formats[ r.format ] = 1
            } else {
              formats[ r.format ] += 1
            }
          } )
      } )

    Object.keys( formats )
      .forEach( format_name => {
        formats_1.push( {
          name: format_name,
          value: formats[ format_name ]
        } )
      } )

    return formats_1.sort( function ( a, b ) {
      return b.value - a.value
    } )
  }

  render(){
    return(
      <div className="stat-container">
        <div className="tile is-ancestor">
          <div className="tile is-parent is-shady">
            <div className="tile is-child">
              <p>最後更新: </p>
              <LastUpdate />

              <p>主要格式統計: </p>
              <SampleTable table_in={this.getFormats()}/>

              <p>主要 Tags 統計: </p>
              <SampleTable table_in={this.getFormats()}/>

              <p></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    api_dictionary: state.api_dictionary
  }
}

export default connect(mapStateToProps)(Stat)