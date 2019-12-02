import React, { Component } from 'react';

import {connect} from 'react-redux'
import {UPDATE_FILTER_TEXT} from '../../reducers/ActionType'

import {Link} from 'react-router-dom'

import './BackButton.css'

class BackButton extends Component{

  handleBackButtonClick(){
    console.log('handleBackButtonClick')
    this.props.updateSearchFilter('')
  }

  render(){
    return(
      <div className="back-button">
        <Link to='/' className="button" onClick={this.handleBackButtonClick()}>返回</Link>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateSearchFilter: (text) => {
      dispatch({type: UPDATE_FILTER_TEXT, text})
    }
  }
}

export default connect(null, mapDispatchToProps)(BackButton)