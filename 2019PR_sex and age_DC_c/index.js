#!/usr/bin/env node

const fs = require( 'fs' )

const input_raw_file = '2019PR_sex_and_age_dc.raw'
const output_json = '2019PR_sex_and_age_dc.json'

const raw_data = fs.readFileSync( input_raw_file, {
  encoding: 'utf-8'
} ).split( /\n/ )

let AGE_GROUPS = [ '18-20', '21-25', '26-30', '31-35', '36-40', '41-45', '46-50', '51-55', '56-60', '61-65', '66-70', '71 or above', '總計' ]

// 香港島
let CENTRAL_WEST = '1'
let WAN_CHAI = '2'
let HONGKONG_EAST = '3'
let HONGKONG_SOUTH = '4'

// 九龍西
let YAU_TSIM_MONG = '6'
let SAM_SHUI_PO = '7'
let KOWLOON_CITY = '8'

// 九龍東
let WONG_TAI_SIN = '10'
let KWUN_TONG = '11'

// 新界西
let TSUN_WAN = '13'
let TSUM_MUN = '14'
let YUNG_LONG = '15'
let KWAI_CHING = '16'
let ISLAND = '17'

// 新界東
let NT_NORTH = '19'
let TAI_PO = '20'
let SAI_KUNG = '21'
let SHA_TIN = '22'



// process.exit()
let output = {}

let raw_file = fs.readFileSync( input_raw_file, {
    encoding: 'utf-8'
  } )
  .split( /\n/ )
  .map( x => x.split( ' ' ) )

function cleanData( data_in ) {
  return data_in.replace( /,/, '' )
}

let ii = 0

function convToDict( array_in ) {
  for ( let i = 0; i < array_in.length; i += 3 ) {
    console.log(i)
    let MAN = i;
    let WOMAN = i + 1;
    let subtotal = i + 2;

    let man_array = array_in[ MAN ].map( x => cleanData( x ) )
    let woman_array = array_in[ WOMAN ].map( x => cleanData( x ) )
    let subtotal_array = array_in[subtotal].map(x => cleanData(x))

    output[ AGE_GROUPS[ ii ] ] = {
      "男": {
        "香港島": {
          "中西區": man_array[ CENTRAL_WEST ],
          "灣仔": man_array[ WAN_CHAI ],
          "東區": man_array[ HONGKONG_EAST ],
          "南區": man_array[ HONGKONG_SOUTH ],
        },
        "九龍西": {
          "油尖旺": man_array[ YAU_TSIM_MONG ],
          "深水埗": man_array[ SAM_SHUI_PO ],
          "九龍城": man_array[ KOWLOON_CITY ],
        },
        "九龍東": {
          "黃大仙": man_array[ WONG_TAI_SIN ],
          "觀塘": man_array[ KWUN_TONG ],
        },
        "新界西": {
          "荃灣": man_array[ TSUN_WAN ],
          "屯門": man_array[ TSUM_MUN ],
          "元朗": man_array[ YUNG_LONG ],
          "葵青": man_array[ KWAI_CHING ],
          "離島": man_array[ ISLAND ],
        },
        "新界東": {
          "北區": man_array[ NT_NORTH ],
          "大埔": man_array[ TAI_PO ],
          "西貢": man_array[ SAI_KUNG ],
          "沙田": man_array[ SHA_TIN ],
        },
      },
      "女": {
        "香港島": {
          "中西區": woman_array[ CENTRAL_WEST ],
          "灣仔": woman_array[ WAN_CHAI ],
          "東區": woman_array[ HONGKONG_EAST ],
          "南區": woman_array[ HONGKONG_SOUTH ],
        },
        "九龍西": {
          "油尖旺": woman_array[ YAU_TSIM_MONG ],
          "深水埗": woman_array[ SAM_SHUI_PO ],
          "九龍城": woman_array[ KOWLOON_CITY ],
        },
        "九龍東": {
          "黃大仙": woman_array[ WONG_TAI_SIN ],
          "觀塘": woman_array[ KWUN_TONG ],
        },
        "新界西": {
          "荃灣": woman_array[ TSUN_WAN ],
          "屯門": woman_array[ TSUM_MUN ],
          "元朗": woman_array[ YUNG_LONG ],
          "葵青": woman_array[ KWAI_CHING ],
          "離島": woman_array[ ISLAND ],
        },
        "新界東": {
          "北區": woman_array[ NT_NORTH ],
          "大埔": woman_array[ TAI_PO ],
          "西貢": woman_array[ SAI_KUNG ],
          "沙田": woman_array[ SHA_TIN ],
        },
      },
      "小計": {
        "香港島": {
          "中西區": subtotal_array[ CENTRAL_WEST ],
          "灣仔": subtotal_array[ WAN_CHAI ],
          "東區": subtotal_array[ HONGKONG_EAST ],
          "南區": subtotal_array[ HONGKONG_SOUTH ],
        },
        "九龍西": {
          "油尖旺": subtotal_array[ YAU_TSIM_MONG ],
          "深水埗": subtotal_array[ SAM_SHUI_PO ],
          "九龍城": subtotal_array[ KOWLOON_CITY ],
        },
        "九龍東": {
          "黃大仙": subtotal_array[ WONG_TAI_SIN ],
          "觀塘": subtotal_array[ KWUN_TONG ],
        },
        "新界西": {
          "荃灣": subtotal_array[ TSUN_WAN ],
          "屯門": subtotal_array[ TSUM_MUN ],
          "元朗": subtotal_array[ YUNG_LONG ],
          "葵青": subtotal_array[ KWAI_CHING ],
          "離島": subtotal_array[ ISLAND ],
        },
        "新界東": {
          "北區": subtotal_array[ NT_NORTH ],
          "大埔": subtotal_array[ TAI_PO ],
          "西貢": subtotal_array[ SAI_KUNG ],
          "沙田": subtotal_array[ SHA_TIN ],
        }
      }
    }
    ii+=1
  }
  return output
}

// console.log( JSON.stringify( convToDict( raw_file ) ) );

fs.writeFileSync('output.json',JSON.stringify( convToDict( raw_file ) ))