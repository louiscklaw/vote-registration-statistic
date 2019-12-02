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
        this.setState({fetch_result: res_text})
      })
  }

  componentDidMount(){
    this.fetchTryout()
  }

  render (){
    return (
      <div>
        <div className="columns">
          <div class="intro column is-8 is-offset-2">
            <h2 class="title">About</h2><br />
            <p class="subtitle">A simple page to demonstrate react and open.gov.hk</p>
          </div>
        </div>
        <div className="columns">
          <div class="intro column is-8 is-offset-2">
            <h2 class="title">Credits:</h2><br />
            <a href="//bulmatemplates.github.io/bulma-templates/templates/hero.html" class="subtitle">bulmatemplates.github.io</a>
          </div>
        </div>
      </div>
    )
  }
}

export default About