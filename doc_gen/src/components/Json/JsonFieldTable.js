import React, { Component } from 'react';

import './JsonFieldTable.css'

class TableExample extends Component{

  renTableBody(json_in){
    return(
      <tbody>
        {
          Object.keys(json_in).map( k => {
          return (
            <tr>
              <th>{k}</th>
              <th>{json_in[k]}</th>
            </tr>
            )
          })
        }
      </tbody>
    )
  }

  renTableColumn(){
    return(
      <tr>
        <th>FieldName</th>
        <th>FieldValue</th>
      </tr>
    )
  }

  renTableHead(){
    return(
      <thead>
        {this.renTableColumn()}
      </thead>
    )
  }

  renTableFoot(){
    return (
      <tfoot>
        {this.renTableColumn()}
      </tfoot>
    )
  }

  render(){
    return (
      <div className="json-field-table">
        <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
          {this.renTableHead()}
          {this.renTableFoot()}
          {this.renTableBody(this.props.json_in)}
        </table>
      </div>
    )
  }
}

export default TableExample