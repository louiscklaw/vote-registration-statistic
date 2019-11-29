import React from 'react';

import {useParams} from 'react-router-dom'

import JsonRaw from '../components/Json/JsonRaw'

import BackButton from '../components/Link/BackButton'
import './ApiDetail.css'
import ApiDetailTest from '../all_api_manifest_9.json'

import JsonGroups from '../components/Json/JsonGroups'
import ApiResources from '../components/Api/ApiResources'

import JsonOrganization from '../components/Json/JsonOrganization'

import ApiRequestContainer from '../components/ApiRequest/ApiRequestContainer'

export default () => {
  let {api_name} = useParams();

  if (Object.keys(ApiDetailTest).includes(api_name)){

    let current_json = ApiDetailTest[api_name];

    let { result } = current_json;
    let { resources, groups, organization} = result;

  return (
      <div className="container">
        <BackButton />
        <div className="app-detail">

          <ApiResources json_res_in={resources} />

          <div className="tile is-ancestor">
            <JsonGroups json_group_in={groups} />
            <JsonOrganization json_org_in={organization}/>
          </div>

          <div className="tile is-ancestor">
            <ApiRequestContainer />
          </div>

          <div className="tile is-ancestor">
            <JsonRaw JsonContent={current_json} />

          </div>
        </div>
      </div>
    )
  }else{
    return (
      <div className="container">
        <BackButton />
        <div className="app-detail">
          <p>api not found</p>
        </div>
      </div>
    )
  }

}