#!/usr/bin/env node

const fs = require('fs')

const input_raw_file = '2019PR_sex_and_age_lc.raw'
const output_json = '2019PR_sex_and_age_lc.json'

const raw_data = fs.readFileSync(input_raw_file, {encoding:'utf-8'}).split(/\n/)

let AGE_GROUPS = ['18-20','21-25','26-30','31-35','36-40','41-45','46-50','51-55','56-60','61-65','66-70','71 or above', 'total']

// process.exit()
let ii = 0

function getAgeGrup(ii)
{
  return AGE_GROUPS[ii]
}

function clearData(str_in){
  return str_in.replace(/,/g,'').trim()
}

function parseRaw(raw_data){
  let output = {}
  for (let i=0;i<raw_data.length;i+=3){
    let age_group = getAgeGrup(ii++);

    let man = i;
    let woman = i+1
    let row_subtotal = i+2

    let HKISLAND = 1 // 香港島
    let KOWLOON_WEST = 2 // 九龍西
    let KOWLOON_EAST = 3 // 九龍東
    let NT_WEST = 4 // 新界西
    let NT_EAST = 5 // 新界東
    let COL_SUBTOTAL = 6 // 總計

    // output[age_group] = 3

    output[age_group] = {
      '男':{
        "香港島": clearData(raw_data[man].split(' ')[HKISLAND]),
        "九龍西": clearData(raw_data[man].split(' ')[KOWLOON_WEST]),
        "九龍東": clearData(raw_data[man].split(' ')[KOWLOON_EAST]),
        "新界西": clearData(raw_data[man].split(' ')[NT_WEST]),
        "新界東": clearData(raw_data[man].split(' ')[NT_EAST]),
        "總計": clearData(raw_data[man].split(' ')[COL_SUBTOTAL])
      },
      '女':{
        "香港島": clearData(raw_data[woman].split(' ')[HKISLAND]),
        "九龍西": clearData(raw_data[woman].split(' ')[KOWLOON_WEST]),
        "九龍東": clearData(raw_data[woman].split(' ')[KOWLOON_EAST]),
        "新界西": clearData(raw_data[woman].split(' ')[NT_WEST]),
        "新界東": clearData(raw_data[woman].split(' ')[NT_EAST]),
        "總計": clearData(raw_data[woman].split(' ')[COL_SUBTOTAL])
      },
      '小計':{
        "香港島": clearData(raw_data[row_subtotal].split(' ')[HKISLAND-1]),
        "九龍西": clearData(raw_data[row_subtotal].split(' ')[KOWLOON_WEST-1]),
        "九龍東": clearData(raw_data[row_subtotal].split(' ')[KOWLOON_EAST-1]),
        "新界西": clearData(raw_data[row_subtotal].split(' ')[NT_WEST-1]),
        "新界東": clearData(raw_data[row_subtotal].split(' ')[NT_EAST-1]),
        "總計": clearData(raw_data[row_subtotal].split(' ')[NT_EAST])
      }
    }
  }
  return output
}

fs.writeFileSync(output_json,JSON.stringify(parseRaw(raw_data)))