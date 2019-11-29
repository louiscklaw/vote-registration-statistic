import React, { Component } from 'react';

import Highlight from 'react-highlight.js'

import {CORS_ERROR} from '../../../const/errors'

import {PrettyApiJsonResponse} from './common'
import {csv_api_call_sample} from './csv_api_call_sample'

import "./CsvResourceTryout.css"

const language='javascript'
const content = 'var three = 1 + 2; // This is a comment'

class CsvResourceTryout extends Component{
  constructor(){
    super()
    this.state={
      call_result: null,
      isLoading: false,
      call_sample_src: null,
      error_found: false
    }
  }

  testCall1(url_in){
    this.setState({isLoading:true})
    eval("fetch('https://istartup.hk/opendata/ccmf/ccmf.csv').then(res => res.text()).then(res_text => console.log(res_text))")
    return fetch(url_in)
    .then(res => res.text())
    .then(res_json => {
      this.setState({
        isLoading: false,
        call_result: res_json
      })

    })
  }

  testCall( url_in ) {
    let sample_code_src = csv_api_call_sample(url_in)
    this.setState( {
      isLoading: true,
      call_result: 'rendering result...'
    } )

    eval( sample_code_src )
      .then(res_json => {
        this.setState({
          isLoading: false,
          call_result: PrettyApiJsonResponse(res_json)
        })
      })
      .catch(
        this.setState({
          call_result: CORS_ERROR,
          error_found: true
        })
      )
    }

  componentDidMount(){
    let test_url = this.props.json_res_in.url
    this.testCall(test_url);
  }

  renResult(call_result_in){
    if(this.state.error_found){
      return(
        <Highlight language={'plaintext'}>
          {call_result_in}
        </Highlight>
      )
    }else{
      return(
        <Highlight language={'csv'}>
          {call_result_in}
        </Highlight>
      )
    }
  }

  render(){
    return (
      <div className="tile is-parent is-half is-shady">
        <article className="tile is-child notification is-white">
          <h3 className="title is-3 json-title">tryout-csv</h3>
          <div className="content">
            <Highlight language={language}>
              {csv_api_call_sample(this.props.json_res_in.url)}
            </Highlight>
          </div>

          <div className="content">
            {this.renResult(this.state.call_result)}
          </div>

        </article>
      </div>
    )
  }
}

export default CsvResourceTryout