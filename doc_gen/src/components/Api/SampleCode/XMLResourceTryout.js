import React, { Component } from 'react';

import Highlight from 'react-highlight.js'

import {api_call_sample} from './api_call_sample'

// import {PrettyApiJsonResponse} from './common'

import './JsonResourceTryout.css'

const language='javascript'

class XMLResourceTryout extends Component{
  constructor(){
    super()
    this.state={
      call_result: null,
      isLoading: false,
      call_sample_src: null
    }
  }

  testCall1( url_in ) {
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

  testCall(url_in){
    console.log('resource tryout not found, skip calling')
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
              <Highlight language={'plaintext'}>
                {'resource tryout not found'}
              </Highlight>

            </div>

          </article>
        </div>
    )
  }
}

export default XMLResourceTryout