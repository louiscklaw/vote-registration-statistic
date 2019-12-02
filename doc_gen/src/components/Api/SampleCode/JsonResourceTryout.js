import React, { Component } from 'react';

// import {CORS_ERROR} from '../../../const/errors'

import {highlightPlaintext, highlightJson, highlightJavascript, highlightErrorText} from '../../../common'

import {IS_LOADING_TEXT} from '../../../const/msg'
import {api_call_sample} from './api_call_sample'

import {getJSONFirebaseTestLink} from '../../../api_endpoint'

// import {PrettyApiJsonResponse} from './common'

import './JsonResourceTryout.css'

class JsonResourceTryout extends Component{
  constructor(){
    super()

    this.state={
      call_result: IS_LOADING_TEXT,
      isLoading: true,
      call_sample_src: null,
      error_found: false,
      url_to_test: null
    }
  }

  testCall( url_in ) {
    let sample_code_src = api_call_sample( url_in )

    eval( sample_code_src )
      .then( res_json => {
        this.setState( {
          ...this.state,
          isLoading: false,
          call_result: res_json,
          error_found: false
        } )
      } )
      .catch((err) =>{
        if (err.message === 'Failed to fetch'){
          this.setState({
            ...this.state,
            error_found: true,
            isLoading: false,
            call_result: err.message
          })
        }
      })
  }

  componentDidMount(){
    let test_url = this.props.json_res_in.url
    this.testCall(test_url);
    this.setState({
      ...this.state,
      url_to_test: test_url
    })
  }

  renResult(){
    let {isLoading, error_found, call_result, url_to_test} = this.state
    if (isLoading){
      return (
        highlightPlaintext(IS_LOADING_TEXT)
      )
    }else{
      if (error_found){
        let firebase_test_link = getJSONFirebaseTestLink(url_to_test)
        return (
          <div>
            {
              highlightErrorText(call_result, firebase_test_link)
            }
          </div>

        )
      }else{
        return(
          <div>
            {highlightJson(call_result)}
          </div>
        )
      }
    }

  }

  render(){
    return (
        <div className="tile is-parent is-half is-shady">
          <article className="tile is-child notification is-white">
            <h3 className="title is-3 json-title">tryout</h3>
            <div className="content">
              {highlightJavascript(api_call_sample(this.props.json_res_in.url))}
            </div>

            <div className="content">
              {this.renResult()}
            </div>

          </article>
        </div>
    )
  }
  render1(){
    return(
      <div>
        {this.renResult()}
      </div>
    )
  }
}

export default JsonResourceTryout