import React, { Component } from 'react';

import {Line} from 'react-chartjs-2';

class ChartjsLine extends Component {
  render(){
    let {data, options} = this.props
    return(
      <div className="chartjs-line">
        <Line data={data} options={options} />
      </div>
    )
  }
}

export default ChartjsLine