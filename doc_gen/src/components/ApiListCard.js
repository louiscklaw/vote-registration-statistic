import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import _const from '../_const'
import {chopLongString} from '../common'

// import AHref from './AHref'
import Card from './Card'
import TagList from './TagList'

import './ApiListCard.css'

class ApiDetailCard extends Component {
  state = {
    api_detail: null,
    maintainer: null
  }

  componentDidMount(){
    let package_to_check = this.props.package_to_check
    let json_to_fetch = `assets/api_details/${package_to_check}.json`
    this.setState({
      ...this.state,
      isLoading: true
    })
  }

  getApiDescription(){
    const {json_to_list, package_name} = this.props
    let {title, name, notes} = json_to_list.result

    if (title === notes){
      return ''
    }else{
      return chopLongString(notes)
    }

  }

  getApiDetail(json_in, package_name){
    let {resources, groups, organization} = json_in.result
    let {title, name, notes} = json_in.result

    let set_group_names = new Set([
      ...groups.map(x => x.display_name),
      ...groups.map(x => x.title)
    ])
    let set_format_names = new Set([
      ...resources.map(x => x.format)
    ])

    let group_names = Array.from([...set_group_names])
    let format_names = Array.from([...set_format_names])

    return (
      <div className="api-detail">
        <Card>
          <p>{title}</p>
          <p>{this.getApiDescription()}</p>

          <div className="horizontal-list">
            <i class="fas fa-tags"></i>
            <TagList tag_list={group_names}/>
          </div>
          <div className="horizontal-list">
            <i class="fas fa-save"></i>
            <TagList tag_list={format_names}/>
          </div>
          <div className="detail-link-list">
            <i class="fas fa-search"></i>
            <Link to={`api_detail/${package_name}`} className="detail-link">詳細資料</Link>
          </div>
        </Card>
      </div>
    )
  }

  render(){
    const {json_to_list, package_name} = this.props

    return(
        <div>
          {this.getApiDetail(json_to_list, package_name)}
        </div>
      )
  }
}


export default ApiDetailCard