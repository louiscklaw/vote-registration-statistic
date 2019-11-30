import React, { Component } from 'react';

import Highlight from 'react-highlight.js'

import {CORS_ERROR} from '../../../const/errors'

// import {PrettyApiJsonResponse} from './common'
import {getCSVFrFirebase} from '../../../api_endpoint'
import {chopLongString} from '../../../common'

import {csv_api_call_sample} from './csv_api_call_sample'

import "./CsvResourceTryout.css"

const language='javascript'

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

  testCall( url_in ) {
    let sample_code_src = csv_api_call_sample(url_in)

    this.setState( {
      isLoading: true,
      call_result: 'rendering result...',
      error_found: null
    } )

    fetch(getCSVFrFirebase(url_in))
      .then( res => res.text())
      .then(res_text => {
        this.setState({
          ...this.state,
          isLoading: false,
          call_result: res_text,
          error_found: false
        })
      })
      .catch(
        this.setState({
          isLoading:false,
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
          {'error'+call_result_in}
        </Highlight>
      )
    }else{
      return(
        <Highlight language={'csv'}>
          {chopLongString(call_result_in,500)}
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
            {this.renResult(this.state.call_result)}
          </div>

        </article>
      </div>
    )
  }
}

export default CsvResourceTryout