import React, { Component } from 'react';

import ChartjsLine from '../../components/chartjs/ChartjsLine'
import ChartjsBar from '../../components/chartjs/ChartjsBar'
import ChartjsRadar from '../../components/chartjs/ChartjsRadar'
import ChartjsDoughnut from '../../components/chartjs/ChartjsDoughnut'
import ChartjsPolar from '../../components/chartjs/ChartjsPolar'
import ChartjsScatter from '../../components/chartjs/ChartjsScatter'

import testData from './testData.json'
import testOptions from './testOptions.json'

import './ChartjsDraft.css'

// let data=testData
// let options=testOptions

class ChartjsDraft extends Component{
  constructor(){
    super()
    this.state={
      data: testData,
      options: testOptions
    }
  }

  handleOnChangeData(e){
    this.setState({
      ...this.state,
      data: JSON.parse(e.target.value),
    })
  }

  handleOnChangeOptions(e){
    this.setState({
      ...this.state,
      options: JSON.parse(e.target.value),
    })
  }
  render(){
    let {data, options} = this.state
    try {
      return (
        <div className="chartjs-draft">
          <div class="tile is-parent is-shady">
            <article class="tile is-child notification is-white">
              <p class="title">Chart.js draft</p>
              <div className="columns">
                <div className="column is-half">
                  <div className="data-textarea">
                    <h3 className="title is-6">data</h3>
                    <textarea class="textarea" rows="30" onChange={(e)=> {this.handleOnChangeData(e)}}
                      >{JSON.stringify(data, null , 1)}</textarea>
                  </div>
                  <div className="options-textarea">
                    <h3 className="title is-6">options:</h3>
                    <textarea class="textarea" rows="10" onChange={(e)=> {this.handleOnChangeOptions(e)}}
                    >{JSON.stringify(options, null , 1)}</textarea>
                  </div>
                </div>
                <div className="column is-half">
                  <div className="columns">

                    <div className="column is-half">
                      <div className="graph-canvas">
                        <ChartjsLine data={data} options={options} />
                      </div>
                    </div>

                    <div className="column is-half">
                      <div className="graph-canvas">
                        <ChartjsBar data={data} options={options} />
                      </div>
                    </div>

                  </div>
                  <div className="columns">

                    <div className="column is-half">
                      <div className="graph-canvas">
                        <ChartjsRadar data={data} options={options} />
                      </div>
                    </div>

                    <div className="column is-half">
                      <div className="graph-canvas">
                        <ChartjsDoughnut data={data} options={options} />
                      </div>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column is-half">
                      <div className="graph-canvas">
                        <ChartjsPolar data={data} options={options} />
                      </div>
                    </div>

                    <div className="column is-half">
                      <div className="graph-canvas">
                        <ChartjsScatter data={data} options={options} />
                      </div>
                    </div>
                  </div>

                  </div>
              </div>
            </article>
          </div>
        </div>
      )

    } catch (err) {
      console.log('error')
      console.error('data', data)
    }
  }
}

export default ChartjsDraft