import React, {Component} from 'react';
import {Link} from 'react-router-dom';


import _const from '../_const'

// import AHref from './AHref'
import Card from './Card'

import './ApiDetailCard.css'

// const test_url = 'assets/api_details/aahk-team1-flight-info.json'

class ApiDetailCard extends Component {
  state = {
    api_detail: null,
    isLoading: false,
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
            <h3 className="is-6 title">{api_detail.resources[0].name}</h3>
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

  getApiDetail(package_name){
    return (
      <div className="api-detail">
        <Card>
          <h3 className="api-name">CCI成份屋苑的物業資料</h3>
          <p>此CSV提供CCI成份屋苑的物業資料包括其屋苑設施, 發展商, 入伙年份及總座數</p>

          <div className="tags">
            <span class="tag">房屋</span>
            <span class="tag">房屋</span>
            <span class="tag">房屋</span>
            <span class="tag">房屋</span>
          </div>
          <Link to="api_detail/helloworld" >detail</Link>
        </Card>
      </div>
    )
  }

  render(){
    const { isLoading} = this.state

    if (isLoading){
      return (<pre>is loading</pre>)
    }

    return(
      <div>
        {this.getApiDetail(this.props.package_to_check)}
      </div>
    )
  }
}


export default ApiDetailCard