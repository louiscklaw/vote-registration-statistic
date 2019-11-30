import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/rootReducer'

import Hero from './components/Hero'
import Footer from './components/Footer'
import all_api_manifest from './api_catalogue/all_api_manifest_99.json'

import ScrollToTop from './components/browser/ScrollToTop'

import About from './pages/About'
import ApiList from './pages/ApiList'
import ApiDetail from './pages/ApiDetail'

import './App.css';

const store = createStore(rootReducer)

function App() {
  return (

    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
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
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
