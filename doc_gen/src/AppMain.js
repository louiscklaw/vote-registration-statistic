import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'

import all_api_manifest from './api_catalogue/all_api_manifest.json'

import ScrollToTop from './components/browser/ScrollToTop'

import About from './pages/About'
import ApiList from './pages/ApiList'
import ApiDetail from './pages/ApiDetail'

import Hero from './components/Hero'

class AppMain extends Component{

  render(){
    return(
      <Switch>
        <Route exact path="/">
          <ScrollToTop />
          <Hero show_search_input={true} />
          <section className="section">

            <ApiList all_api_list={all_api_manifest} />
          </section>
        </Route>

        <Route path="/about">
          <ScrollToTop />
          <Hero show_search_input={false} />
          <section className="section">
            <About />
          </section>
        </Route>

        <Route path="/api_detail/:api_name">
          <ScrollToTop />
          <Hero show_search_input={false} />
          <section className="section">
            <ApiDetail api_catalogue={all_api_manifest}/>
          </section>
        </Route>

      </Switch>
    )
  }
}

export default AppMain