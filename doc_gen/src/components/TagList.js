import React, { Component } from 'react';

import Tags from './Tags'

class TagList extends Component {

  renTagList(tag_list_in){
    return tag_list_in.map(x => {
      return(
        <Tags tag_text={x} key={x} />
      )
    })
  }

  render(){
    return (
    <div className="tags">
      {this.renTagList(this.props.tag_list)}
    </div>
    )
  }
}

export default TagList