import React, { Component } from 'react';

export default ({tag_text}) => {
  return(
    <span className="tag is-info is-light">
      {tag_text}
    </span>
  )
}