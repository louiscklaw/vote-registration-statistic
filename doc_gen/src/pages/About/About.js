import React, { Component } from 'react';

import {getCSVFrFirebase} from '../../api_endpoint'

class About extends Component{
  constructor(){
    super()
    this.state={
      fetch_result: null
    }
  }

  fetchTryout = () =>{
    console.log('request processing...')
    this.state.fetch_result = 'testing'
    fetch(getCSVFrFirebase('https://www.afcd.gov.hk/data/tree_walks_tc.csv'))
      .then( res => res.text())
      .then(res_text => {
        console.log(res_text)
        this.setState({fetch_result: res_text})
      })
  }

  componentDidMount(){
    this.fetchTryout()
  }

  render (){
    return (
      <div>
        <p>about page</p>
        <pre>
          {this.state.fetch_result}
        </pre>
      </div>
    )
  }
}

export default About