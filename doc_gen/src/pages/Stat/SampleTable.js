import React, { Component } from 'react';

class SampleTable extends Component{

  genTableHead(){
    return this.props.table_in
      .map( d => {
        return (<td>{d.name}</td>)
      })

  }

  genTableValue(){
    return this.props.table_in
      .map( d => {
        return (<td>{d.value}</td>)
      })
  }

  render(){
    return(
      <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
        <tr>
          <td>format</td>{this.genTableHead()}
        </tr>
        <tr>
          <td>count</td>{this.genTableValue()}
        </tr>
      </table>
    )
  }
}

export default SampleTable