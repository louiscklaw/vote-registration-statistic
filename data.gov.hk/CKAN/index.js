#!/usr/bin/env node
const fs = require('fs')

const fetch = require('node-fetch')
let all_api_json = {}

const PACKAGE_LIST_URL = 'https://data.gov.hk/tc-data/api/3/action/package_list'
const PACKAGE_DETAIL_URL = 'https://data.gov.hk/tc-data/api/3/action/package_show?id='

var getPackageDetailUrl = (package_name) => PACKAGE_DETAIL_URL+package_name

const all_api_manifest = async () => {
  fetch(PACKAGE_LIST_URL)
    .then(res => res.json())
    .then( async (res_json) => {
      for(api_name of res_json.result){
        var _ = await fetch(getPackageDetailUrl(api_name))
          .then(res=> res.json())
          .then(res_json => {
            console.log(`done -> ${api_name}`)
            all_api_json[api_name] = res_json
          })
      }
    })
    .then(() => {
      fs.writeFileSync('all_api_manifest.json', JSON.stringify(all_api_json))
    })
}



all_api_manifest()

// const package_list = common.readPackageList().result

// const detail_url = 'https://data.gov.hk/tc-data/api/3/action/package_show?id='

// // common.fetchJSON('https://data.gov.hk/tc-data/api/3/action/package_show?id=aahk-team1-flight-info')
// //   .then(res_json => console.log(res_json))

// const forlooptest = async () =>{
//   let i = 0
//   for(one_package of package_list.slice(2,5)){
//     let temp_url = detail_url+one_package
//     console.log(`getting ${i++}/${package_list.length()} ${temp_url}`)

//     let temp = await common.fetchJSON(detail_url+one_package)

//     fs.writeFileSync(`./result/${one_package}.json`, JSON.stringify(temp))

//   }
// }

// forlooptest()