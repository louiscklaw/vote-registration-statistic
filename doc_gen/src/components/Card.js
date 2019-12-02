import React from 'react';

import './Card.css'

export default (props) => {
  return (
      <div className="card is-shady">
        <div className="card-content">
          <div className="content">
            {props.children}
          </div>
        </div>
      </div>
  )
}