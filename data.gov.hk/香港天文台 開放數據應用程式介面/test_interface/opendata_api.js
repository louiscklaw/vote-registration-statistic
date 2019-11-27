const API_LOCATION = 'https://data.weather.gov.hk/weatherAPI/opendata/opendata.php'

const ENGLISH = 'en'
const TRADITIONAL_CHINESE = 'tc'
const SIMPLIFIED_CHINESE = 'sc'

// 開放數據（氣象及天氣資訊）應用程式介面
const OPEN_DATA_API = {
  dataType: {
    HOURLY_HEIGHTS_OF_TIDES: 'HHOT',
    TIMES_AND_HEIGHTS_OF_HIGH_AND_LOW_TIDES: 'HLT',
    TIMES_OF_SUNRISE_SUN_TRANSIT_AND_SUNSET: 'SRS',
    TIMES_OF_MOONRISE_MOON_TRANSIT_AND_MOONSET: 'MRS',
    DAILY_MEAN_TEMPERATURE: 'CLMTEMP',
    DAILY_MAXIMUM_TEMPERATURE: 'CLMMAXT',
    DAILY_MINIMUM_TEMPERATURE: 'CLMMINT',
    LATEST_10_MINUTE_MEAN_VISIBILITY: 'LTMV',
    CLOUD_TO_GROUND_AND_CLOUD_TOCLOUD_LIGHTNING_COUNT: 'LHL'
  },
  rformat: {
    json: 'json',
    csv: 'csv'
  },
  station: {
    CHEUNG_CHAU: 'CCH',
    CHEK_LAP_KOK: 'CLK',
    CHI_MA_WAN: 'CMW',
    KWAI_CHUNG: 'KCT',
    KO_LAU_WAN: 'KLW',
    LOK_ON_PAI: 'LOP',
    MA_WAN: 'MWC',
    QUARRY_BAY: 'QUB',
    SHEK_PIK: 'SPW',
    TAI_O: 'TAO',
    TSIM_BEI_TSUI: 'TBT',
    TAI_MIU_WAN: 'TMW',
    TAI_PO_KAU: 'TPK',
    WAGLAN_ISLAND: 'WAG'
  },

}

let data_type = OPEN_DATA_API.dataType
let lang = OPEN_DATA_API.lang
let rformat = OPEN_DATA_API.rformat
let station = OPEN_DATA_API.station


let test_list = [
  [ {
      dataType: data_type.TIMES_AND_HEIGHTS_OF_HIGH_AND_LOW_TIDES,
      rformat: rformat.json,
      station: station.CHEUNG_CHAU,
      year: 2020
    },
    data_type.TIMES_AND_HEIGHTS_OF_HIGH_AND_LOW_TIDES,
    '漲潮和退潮的時間和高度',
    '<p>helloworld</p>'
  ],

  [ {
      dataType: data_type.TIMES_OF_SUNRISE_SUN_TRANSIT_AND_SUNSET,
      rformat: rformat.json,
      year: 2019,
      month: 1,
      day: 1
    },
    data_type.TIMES_OF_SUNRISE_SUN_TRANSIT_AND_SUNSET,
    '日出、日中天、日落時間'
  ],
  [ {
      dataType: data_type.TIMES_OF_MOONRISE_MOON_TRANSIT_AND_MOONSET,
      rformat: rformat.json,
      year: 2019,
      month: 1,
      day: 1
    },
    data_type.TIMES_OF_MOONRISE_MOON_TRANSIT_AND_MOONSET,
    '月出、月中天、月落時間'
  ],
  [ {
      dataType: data_type.CLOUD_TO_GROUND_AND_CLOUD_TOCLOUD_LIGHTNING_COUNT,
      lang: TRADITIONAL_CHINESE,
      rformat: rformat.json
    },
    data_type.CLOUD_TO_GROUND_AND_CLOUD_TOCLOUD_LIGHTNING_COUNT,
    '雲對地及雲間閃電次數'
  ],
  [ {
      dataType: data_type.LATEST_10_MINUTE_MEAN_VISIBILITY,
      lang: TRADITIONAL_CHINESE,
      rformat: rformat.json
    },
    data_type.LATEST_10_MINUTE_MEAN_VISIBILITY,
    '最新十分鐘平均能見度'
  ],

  [ {
      dataType: data_type.DAILY_MEAN_TEMPERATURE,
      rformat: rformat.json,
      station: station.CHEUNG_CHAU
    },
    data_type.DAILY_MEAN_TEMPERATURE,
    '日平均氣溫'
  ],

  [ {
      dataType: data_type.DAILY_MAXIMUM_TEMPERATURE,
      rformat: rformat.json,
      station: station.CHEUNG_CHAU
    },
    data_type.DAILY_MAXIMUM_TEMPERATURE,
    '日最高氣溫'
  ],

  [ {
      dataType: data_type.DAILY_MINIMUM_TEMPERATURE,
      rformat: rformat.json,
      station: station.CHEUNG_CHAU
    },
    data_type.DAILY_MINIMUM_TEMPERATURE,
    '日最低氣溫'
  ],


]

function getResTableHtmlId( data_type_in ) {
  return `opendataapi-${data_type_in}-table-placeholder`
}

function getReqHtmlId( data_type_in ) {
  return 'opendataapi-' + data_type_in
}

function getResHtmlId( data_type_in ) {
  return 'opendataapi-' + data_type_in + 'result'
}

function flattenRequest( d_in ) {
  return Object.keys( d_in )
    .map( x => `${x}=${d_in[x]}` )
    .join( '&' )
}

function getRequestString( req_in ) {
  return `${API_LOCATION}?${flattenRequest(req_in)}`
}

function fetchGet( req_in, datatype_in ) {
  let res_html_id = getResHtmlId( datatype_in )
  let table_html_id = getResTableHtmlId( datatype_in )

  fetch( req_in )
    .then( res => res.json() )
    .then( res_json => {

      document.querySelector( `#${res_html_id}` ).innerHTML = `<pre>${JSON.stringify(res_json)}</pre>`

      if ( Object.keys( res_json ).includes( 'data' ) ) {
        document.querySelector( `#${table_html_id}` ).innerHTML = getTableContentFromJson( res_json )
      }


    } )
}

function getEle( sel_in ) {
  return document.querySelector( sel_in )
}

function getWeather( req_in, datatype_in ) {
  let req_html_id = getReqHtmlId( datatype_in )
  let req_string = getRequestString( req_in )

  getEle( `#${req_html_id}` ).innerHTML = req_string
  fetchGet( req_string, datatype_in )
}

function genHtml( test_list ) {
  return test_list.map( x => {
    return `<div class="test_set">
    <h3 class="subtitle is-3">${x[2]}</h3>
    <div id="${getReqHtmlId(x[ 1 ])}"></div>
    <div id="${getResHtmlId(x[ 1 ])}"></div>
    <div id="${getResTableHtmlId(x[ 1 ])}"></div>

  </div>`
  } ).join( '' )
}

getEle( '#result-sheet' ).innerHTML = genHtml( test_list )

test_list.forEach( x => {

  data_type = x[ 1 ]

  getWeather( x[ 0 ], data_type )
} )





function sayResult( result_in ) {
  getEle( '#test-result' ).innerHTML = result_in
}

function test_request() {
  return true
}

function test_all() {
  sayResult( 'fail' )

  try {
    if ( test_request() ) {
      sayResult( 'ok' )
    }
  } catch ( err ) {}
}

test_all()

console.log( 'hello opendata_api.js' )