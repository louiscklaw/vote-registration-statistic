import React from 'react';


export default (props) => {
  return (
    <div className="card is-shady">
      <div className="card-image has-text-centered">
        <i className="fa fas fa-chart-bar"></i>
      </div>
      <div className="card-content">
        <div className="content">
          {props.children}
        </div>
      </div>
    </div>
  )
}