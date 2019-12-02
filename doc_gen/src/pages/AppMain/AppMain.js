import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'

import {connect} from 'react-redux'

import ScrollToTop from '../../components/browser/ScrollToTop'
import Hero from '../../components/Hero'

import About from '../About/About'
import Stat from '../Stat/Stat'
import ChartjsDraft from '../ChartjsDraft/ChartjsDraft'
import TestPage from '../TestPage/TestPage'

import ApiList from '../ApiList/ApiList'
import ApiDetail from '../ApiDetail'


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

        <Route path="/testpage">
          <ScrollToTop />
          <Hero show_search_input={false} />
          <section className="section">
            <TestPage />
          </section>
        </Route>

        <Route path="/chartjs_draft">
          <ScrollToTop />
          <Hero show_search_input={false} />
          <section className="section">
            <ChartjsDraft />
          </section>
        </Route>

        <Route path="/api_detail/:api_name">
          <ScrollToTop />
          <Hero show_search_input={false} />
          <section className="section">
            <ApiDetail api_catalogue={this.props.all_api_manifest}/>
          </section>
        </Route>

        <Route path="/by_tags/:filter_by_tags">
          <ScrollToTop />
          <Hero show_search_input={true} />
          <div className="app-main">
            <section className="section">
              <ApiList all_api_list={this.props.all_api_manifest} />
            </section>
          </div>
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