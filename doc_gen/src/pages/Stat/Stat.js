import React, { Component } from 'react';
import {connect} from 'react-redux'

import Highlight from 'react-highlight.js'
import Clipboard from 'react-clipboard.js';

import SampleTable from './SampleTable'
// import { JsonToTable } from "react-json-to-table";

import './Stat.css'

class LastUpdate extends Component{
  render(){
    return(
      <p>last update ?</p>
    )
  }
}

class Stat extends Component{
  countFormats(){
    let formats = {}
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

    return [
      Object.keys(formats).map(k => `"${k}"`),
      Object.keys(formats).map(k => `${formats[k]}`)
    ].join('\n')

  }



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
              <div className="columns">
                <div className="column is-full">
                    <h2 className="title is-6">最後更新: </h2>
                    <LastUpdate />
                </div>
              </div>
              <div className="columns">
                <div className="column is-full">
                  <h2 className="title is-6">主要格式統計: </h2>

                  <Highlight language={'csv'}>
                    {this.countFormats()}
                  </Highlight>

                  <Clipboard data-clipboard-text={this.countFormats()}>
                    Copy CSV
                  </Clipboard>

                  <SampleTable table_in={this.getFormats()}/>
                </div>
              </div>
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