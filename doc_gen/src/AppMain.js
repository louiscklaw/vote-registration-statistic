import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'

import {connect} from 'react-redux'

import ScrollToTop from './components/browser/ScrollToTop'

import About from './pages/About/About'
import Stat from './pages/Stat/Stat'

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

            <ApiList all_api_list={this.props.all_api_manifest} />
          </section>
        </Route>

        <Route path="/stat">
          <ScrollToTop />
          <Hero show_search_input={false} />
          <section className="section">
            <Stat />
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
            <ApiDetail api_catalogue={this.props.all_api_manifest}/>
          </section>
        </Route>

      </Switch>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    all_api_manifest: state.api_dictionary
  }
}

export default connect(mapStateToProps)(AppMain)