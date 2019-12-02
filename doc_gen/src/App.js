import React from 'react';
import {BrowserRouter} from 'react-router-dom'

import Footer from './components/Footer/Footer'

import AppMain from './pages/AppMain/AppMain'
// import Helloworld from './pages/AppMain/Helloworld'


import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/rootReducer'

import './App.css';

const store = createStore(rootReducer)

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <AppMain />
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
}



export default App;
