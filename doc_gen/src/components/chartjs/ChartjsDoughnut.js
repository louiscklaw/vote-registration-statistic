import React, { Component } from 'react';

import {Doughnut} from 'react-chartjs-2';

class ChartjsDoughnut extends Component {
  render(){
    let {data, options} = this.props
    return(
      <div className="chartjs-Doughnut">
        <Doughnut data={data} options={options} />
      </div>
    )
  }
}

export default ChartjsDoughnut