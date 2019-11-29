import React, { Component } from 'react';

import Highlight from 'react-highlight.js'

import {api_call_sample} from './api_call_sample'

import {PrettyApiJsonResponse} from './common'

import './JsonResourceTryout.css'

const language='javascript'
const content = 'var three = 1 + 2; // This is a comment'



class JsonResourceTryout extends Component{
  constructor(){
    super()
    this.state={
      call_result: null,
      isLoading: false,
      call_sample_src: null
    }
  }

  testCall( url_in ) {
    let sample_code_src = api_call_sample(url_in)
    this.setState( {
      isLoading: true,
      call_result: 'rendering result...'
    } )

    eval( sample_code_src )
      .then(res_json => {
        this.setState({
          isLoading: false,
          call_result: res_json
        })
      })
}

  componentDidMount(){
    let test_url = this.props.json_res_in.url
    this.testCall(test_url);
  }

  render(){
    return (
        <div className="tile is-parent is-half is-shady">
          <article className="tile is-child notification is-white">
            <h3 className="title is-3 json-title">tryout</h3>
            <div className="content">
              <Highlight language={language}>
                {api_call_sample(this.props.json_res_in.url)}
              </Highlight>
            </div>

            <div className="content">
              <Highlight language={'json'}>
                {PrettyApiJsonResponse(this.state.call_result)}
              </Highlight>

            </div>

          </article>
        </div>
    )
  }
}

export default JsonResourceTryout