import React, { Component } from 'react';

class ApiDataDictionary extends Component{

  constructor(){
    super()
    this.state={
      pdf_json: null
    }
  }

  getCodeText( code_in ) {
    return (<code>{code_in}</code>)
  }

  getHrefLink( link_in ) {
    return (<a href={link_in}>{link_in}</a>)
  }

  renTableColumn(){
    return(
      <tr>
        <th>FieldName</th>
        <th>FieldValue</th>
      </tr>
    )
  }

  renFieldValue(name_in, value_in){
    if (name_in.search('id') > -1){
      return (<td>{this.getCodeText(value_in)}</td>)
    }else if(value_in.search(/https|http/)>-1){
      return (<td>{this.getHrefLink(value_in)}</td>)
    }else{
      return (<td>{value_in}</td>)
    }
  }

  renTableHead(){
    return(
      <thead>
        {this.renTableColumn()}
      </thead>
    )
  }

  checkDocumentationInJson(json_in){
    let output = {}
    Object.keys(json_in)
      .forEach( k => {
        // filter out if the search function available
        if (json_in[k] != null && typeof(json_in[k].search)==='function'){
          // filter out those with pdf in their value
          if (json_in[k].search(/pdf/) > -1){
            output[k] =json_in[k]
          }
        }
      })
    return output
  }

  renTableBody(json_in){
    return(
      <tbody>
        {
          Object.keys(json_in).map( k => {
            return (
              <tr　key={k}>
                <th>{k}</th>
                {this.renFieldValue(k, json_in[k].toString())}
              </tr>
              )
          })
        }
      </tbody>
    )
  }

  renTable(result_in){
    let pdf_search_result = this.checkDocumentationInJson(result_in)
    console.log(pdf_search_result)
    if(Object.keys(pdf_search_result).length > 0 ){
      return(
        <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
            {this.renTableHead()}
            {/* {this.renTableFoot()} */}
            {this.renTableBody(pdf_search_result)}
        </table>
      )
    }else{
      return (<p>no pdf found</p>)
    }
    // return (<pre>{JSON.stringify(result_in)}</pre>)
  }

  render(){
    return(
      <div className="tile is-parent is-full is-shady">
        <article className="tile is-child notification is-white">
          <h6 className="title is-full is-6 json-title">Api documentation</h6>
          { this.renTable(this.props.result_in) }
        </article>
      </div>
    )
  }
}

export default ApiDataDictionary