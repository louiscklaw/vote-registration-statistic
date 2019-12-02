import React, { Component } from 'react';

import {Radar} from 'react-chartjs-2';

class ChartjsRadar extends Component {
  render(){
    let {data, options} = this.props
    return(
      <div className="chartjs-Radar">
        <Radar data={data} options={options} />
      </div>
    )
  }
}

export default ChartjsRadar