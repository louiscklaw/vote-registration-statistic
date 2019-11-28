
const fetch = require('node-fetch')
const fs = require('fs')

fetch('https://data.gov.hk/tc-data/api/3/action/package_list')
  .then(res => res.json())
  .then(res_json => fs.writeFileSync('./package_list.json', JSON.stringify(res_json)));

function helloworld(){
  console.log('helloworld')
}

function readPackageList(){
  return JSON.parse(fs.readFileSync('./package_list.json', {encoding:'utf-8'}))
}

function fetchJSON(url){
  return fetch(url)
    .then(res => res.json())
}

module.exports ={
  helloworld: helloworld,
  readPackageList: readPackageList,
  fetchJSON: fetchJSON
}