import React, { Component } from 'react';

import {Bar} from 'react-chartjs-2';

class ChartjsBar extends Component {
  render(){
    let {data, options} = this.props
    return(
      <div className="chartjs-Bar">
        <Bar data={data} options={options} />
      </div>
    )
  }
}

export default ChartjsBar