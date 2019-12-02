import React, { Component } from 'react';

import Highlight from 'react-highlight.js'

import { Line, Bar, Radar, Doughnut, Polar, Bubble, Scatter } from 'react-chartjs-2';

import testData from './testData.json'
import testOptions from './testOptions.json'

import './TestPage.css'

let data=testData
let options=testOptions

class TestPage extends Component{
  render(){
    return (
      <div class="tile is-parent is-shady">
        <article class="tile is-child notification is-white">
          <p class="title">Test Page</p>
          <p class="subtitle">page incubator</p>
          <div class="content">
            <div className="columns">

              <div className="column is-one-third">
                <Highlight language={'json'}>
                  // optinos.json
                  {JSON.stringify(options, null , 1)}

                  // data.json
                  {JSON.stringify(data, null , 1)}
                </Highlight>
              </div>

              <div className="column is-two-thirds">
                <div className="columns">
                  <div className="column is-6">
                    <div className="graph-canvas">
                      <Line data={data} options={options} />
                    </div>
                  </div>
                  <div className="column is-6">
                    <Bar data={data} options={options} />
                  </div>

                </div>

                <div className="columns">
                  <div className="column is-6">
                    <Radar data={data} options={options} />
                  </div>
                  <div className="column is-6">
                    <Doughnut data={data} options={options} />
                  </div>

                </div>

                <div className="columns">
                  <div className="column is-6">
                    <Polar area data={data} options={options} />
                  </div>
                  <div className="column is-6">
                    <Bubble data={data} options={options} />
                  </div>
                </div>

                <div className="columns">
                  <div className="column is-4">
                    <Scatter data={data} options={options} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    )
  }
}

export default TestPage