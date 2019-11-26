import React from 'react';

import Hero from './components/Hero'
import Content from './components/Content'

import Footer from './components/Footer'

import './App.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <section className="container">
        <Content />
      </section>
      <Footer />
    </div>
  );
}

export default App;
