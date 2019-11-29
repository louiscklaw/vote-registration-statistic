import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import _const from '../_const'
import {chopLongString} from '../common'

// import AHref from './AHref'
import Card from './Card'
import TagList from './TagList'

import './ApiListCard.css'

// const test_url = 'assets/api_details/aahk-team1-flight-info.json'

class ApiDetailCard extends Component {
  state = {
    api_detail: null,
    maintainer: null
  }

  componentDidMount(){
    let package_to_check = this.props.package_to_check
    let json_to_fetch = `assets/api_details/${package_to_check}.json`
    this.setState({isLoading: true})

    fetch(json_to_fetch)
      .then(res => res.json())
      .then(res_json => {
        let result = res_json.result

        this.setState({
          isLoading: false,
          json_url: json_to_fetch,

          api_detail: res_json.result
        })
        console.log('maintainer', result.maintainer)
      })
  }

  getApiDetail1(package_name) {
    let state = this.state
    let api_detail = state.api_detail

    if (api_detail != null && Object.keys(api_detail).includes('maintainer')){
      return (
        <div>
          <div className="text-details">
            {/* <p>{this.state.api_detail}</p> */}
            <h3 className="is-half title">{api_detail.resources[0].name}</h3>
            <p>{api_detail.resources[0].description}</p>

            <p>{api_detail.maintainer}</p>
            <p>{api_detail.update_frequency}</p>
            <a href={state.json_url}>origional json</a>
          </div>
          <div className="tags">

          </div>
          <div className="data-dictionary">
            <a href={api_detail.data_dictionary}>data dictionary</a>
          </div>
        </div>
      )
    }else{
      return (
        <div>
          <p>no detail provided</p>
        </div>
      )
    }
  }

  getApiDetail(json_in, package_name){
    let {resources, groups, organization} = json_in.result
    let {title, name, notes} = json_in.result

    let set_group_names = new Set([
      ...groups.map(x => x.display_name),
      ...groups.map(x => x.title)
    ])
    let group_names = Array.from(set_group_names)

    return (
      <div className="api-detail">
        <Card>
          <p>{title}</p>
          {/* <p>{name}</p> */}
          <p>{chopLongString(notes)}</p>

          <TagList tag_list={group_names}/>
          <Link to={`api_detail/${package_name}`} >detail</Link>
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