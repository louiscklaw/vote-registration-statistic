import React, { Component } from 'react';

import Highlight from 'react-highlight.js'

import { Doughnut } from 'react-chartjs-2';

let data={
  labels: [ 'Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange' ],
  datasets: [ {
    label: '# of Votes',
    data: [ 12, 19, 3, 5, 2, 3 ],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)'
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
    ],
    borderWidth: 1
  } ]
}

class TestPage extends Component{
  render(){
    return (
      <div class="tile is-parent is-shady">
        <article class="tile is-child notification is-white">
          <p class="title">Wide column</p>
          <p class="subtitle">Aligned with the right column</p>
          <div class="content">
            <div className="columns">
              <div className="column is-6">
                <Doughnut data={data} />
              </div>
              <div className="column is-6">

                <Highlight language={'plaintext'}>
                  {`IS_LOADING_TEXT`}
                </Highlight>

              </div>
            </div>
          </div>
        </article>
      </div>
    )
  }
}

export default TestPage