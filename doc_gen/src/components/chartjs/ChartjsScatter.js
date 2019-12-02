import React, { Component } from 'react';

import {Scatter} from 'react-chartjs-2';

class ChartjsScatter extends Component {
  render(){
    let {data, options} = this.props
    return(
      <div className="chartjs-Scatter">
        <Scatter data={data} options={options} />
      </div>
    )
  }
}

export default ChartjsScatter