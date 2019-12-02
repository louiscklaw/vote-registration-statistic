import React, { Component } from 'react';

import Tags from './Tags'
import "./TagList.css"

class TagList extends Component {

  renTagList(){
    let tag_list = this.props.tag_list
    return tag_list.map(x => {
      return(
        <Tags tag_text={x} key={x} />
      )
    })
  }

  render(){
    return (
    <div className="tags">
      {this.renTagList()}
    </div>
    )
  }
}

export default TagList