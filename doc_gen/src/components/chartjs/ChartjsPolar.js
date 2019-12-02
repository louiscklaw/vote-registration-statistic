import React, { Component } from 'react';

import {Polar} from 'react-chartjs-2';

class ChartjsPolar extends Component {
  render(){
    let {data, options} = this.props
    return(
      <div className="chartjs-Polar">
        <Polar data={data} options={options} />
      </div>
    )
  }
}

export default ChartjsPolar