#!/usr/bin/env node

const fs = require( 'fs' )
const fetch = require( 'node-fetch' );

let package_show_url = 'https://data.gov.hk/tc-data/api/3/action/package_show?id={dataset_id}'
let url = "https://data.gov.hk/tc-data/api/3/action/package_list";

let settings = {
  method: "Get"
};

fetch( url, settings )
  .then( res => res.json() )
  .then( ( json ) => {
    // do something with JSON
    let package_list = json.result
    fs.writeFileSync( 'list.json', JSON.stringify( json ) )
    // console.log(package_list)

    const forloop = async (package_list) => {
      for ( q_package of package_list ) {
        let show_detail_url = package_show_url.replace( '{dataset_id}', q_package )
        console.log(`process => ${show_detail_url}`)
        await fetch( show_detail_url, settings )
          .then( res => res.json() )
          .then( res_json => {
            fs.writeFileSync( `./package_details/${q_package}.json`, JSON.stringify( res_json ) )
          } )
      }
    }
    forloop(package_list)

  } );
