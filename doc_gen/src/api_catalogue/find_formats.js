#!/usr/bin/env node

const fs = require('fs')

const in_json = JSON.parse(fs.readFileSync('./all_api_manifest.json',{encoding: 'utf-8'}))

let formats = {}

const test = Object.keys(in_json)
  .forEach( k => {
    in_json[k].result.resources
      .forEach( r => {
        if (formats[r.format] == undefined){
          formats[r.format] = 1
        }else{
          formats[r.format]+=1
        }
      })
  })


console.log(formats)