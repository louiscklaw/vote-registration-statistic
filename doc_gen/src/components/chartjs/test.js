import React, { Component } from 'react';

import { Doughnut } from 'react-chartjs-2';

export default () => {
  return(
    <div>
      <Bar
        data={data}
        width={100}
        height={50}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  )
}