import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Hero from './components/Hero'
import Footer from './components/Footer'
import all_api_manifest from './api_catalogue/all_api_manifest_99.json'

import About from './pages/About'
import ApiList from './pages/ApiList'
import ApiDetail from './pages/ApiDetail'

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>

          <Route exact path="/">
            <Hero show_search_input={true} />
            <section className="section">

              <ApiList all_api_list={all_api_manifest} />
            </section>
          </Route>

          <Route path="/about">
            <Hero show_search_input={false} />
            <section className="section">
              <About />
            </section>
          </Route>

          <Route path="/api_detail/:api_name">
            <Hero show_search_input={false} />
            <section className="section">
              <ApiDetail api_catalogue={all_api_manifest}/>
            </section>
          </Route>

        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
