import React from 'react';
import {Link} from 'react-router-dom'

import './BackButton.css'

export default () => {
  return(
    <div className="back-button">
      <Link to='/' className="button">back</Link>
    </div>
  )
}