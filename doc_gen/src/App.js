import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Hero from './components/Hero'
import Footer from './components/Footer'
import all_api_manifest from './all_api_manifest_9.json'

import Content from './components/Content'
import AppDetail from './components/AppDetail'

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Hero show_search_input={true} />
            <section className="section">

              <Content all_api_list={all_api_manifest} />
            </section>
          </Route>

          <Route path="/api_detail/:api_name">
            <Hero show_search_input={false} />
            <section className="section">
              <AppDetail />
            </section>
          </Route>
        </Switch>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
