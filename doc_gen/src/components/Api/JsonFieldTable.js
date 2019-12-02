import React, { Component } from 'react';

import './JsonFieldTable.css'

const OrderOverride = ['name', 'description', 'url', 'keywords']

class TableExample extends Component{

  getCodeText(code_in){
    return (<code>{code_in}</code>)
  }

  getHrefLink(link_in){
    return (<a href={link_in}>{link_in}</a>)
  }

  translateBrFrText(text_in){
    return text_in.replace(/\n/g,'<br />')
  }

  renFieldValue(name_in, value_in){
    if (name_in.search('id') > -1){
      return (<td>{this.getCodeText(value_in)}</td>)
    }else if(value_in.search(/https|http/)>-1){
      return (<td>{this.getHrefLink(value_in)}</td>)
    }else{
      return (<td>{this.translateBrFrText(value_in)}</td>)
    }
  }

  renTableBody(json_in){
    return(
      <tbody>
        {
          OrderOverride.map( k => {
            if ( !([null,undefined].includes(json_in[k])) && json_in[k].toString().trim() !== ''){
              return (
                <tr key={k}>
                  <th>{k}</th>
                  {this.renFieldValue(k, json_in[k].toString())}
                </tr>
                )
            }else{
              return ''
            }
          })
        }
        {
          Object.keys(json_in).map( k => {
            if (!(OrderOverride.includes(k))){
              if ( !([null,undefined].includes(json_in[k])) && json_in[k].toString().trim() !== ''){
              return (
                <tr key={k}>
                  <th>{k}</th>
                  {this.renFieldValue(k, json_in[k].toString())}
                </tr>
                )
            }else{
              return ''
            }
            }

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
        <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
          {this.renTableHead()}
          {/* {this.renTableFoot()} */}
          {this.renTableBody(this.props.json_in)}
        </table>
      </div>
    )
  }
}

export default TableExample