import React, { Component } from 'react';

import Highlight from 'react-highlight.js'

import {CORS_ERROR} from '../../../const/errors'
import {IS_LOADING_TEXT} from '../../../const/msg'

// import {PrettyApiJsonResponse} from './common'
import {getCSVFrFirebase} from '../../../api_endpoint'
import {chopLongString} from '../../../common'

import {csv_api_call_sample} from './csv_api_call_sample'

import "./CsvResourceTryout.css"

class CsvResourceTryout extends Component{
  constructor(){
    super()

    this.state={
      call_result: IS_LOADING_TEXT,
      isLoading: true,
      call_sample_src: null,
      error_found: false
    }
  }

  testCall( url_in ) {
    let sample_code_src = csv_api_call_sample(url_in)

    fetch(getCSVFrFirebase(url_in, 10))
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
          ...this.state,
          isLoading:false,
          error_found: true
        })
      )

    }

  componentDidMount(){
    let test_url = this.props.json_res_in.url
    this.testCall(test_url);
  }

  renResult(call_result_in){
    let {isLoading, error_found, call_result} = this.state
    if (isLoading){
      return(
        <Highlight language={'plaintext'}>
          {IS_LOADING_TEXT}
        </Highlight>
      )
    }else{
      if(error_found){
        return(
          <Highlight language={'plaintext'}>
            {CORS_ERROR}
          </Highlight>
        )
      }else{
        return(
          <Highlight language={'csv'}>
            {chopLongString(call_result,500)}
          </Highlight>
        )
      }
    }

  }

  render(){
    return (
      <div className="tile is-parent is-half is-shady">
        <article className="tile is-child notification is-white">
          <h3 className="subtitle is-6 json-title">tryout</h3>
          <div className="content">
            {this.renResult()}
          </div>

        </article>
      </div>
    )
  }
}

export default CsvResourceTryout