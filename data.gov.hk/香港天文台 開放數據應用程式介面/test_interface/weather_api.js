
const ENGLISH = 'en'
const TRADITIONAL_CHINESE = 'tc'
const SIMPLIFIED_CHINESE = 'sc'

// 天氣資訊應用程式介面
const LOCAL_WEATHER_FORECAST = 'flw'
const NINE_DAY_WEATHER_FORECAST = 'fnd'
const CURRENT_WEATHER_REPORT = 'rhrread'
const WEATHER_WARNING_SUMMARY = 'warnsum'
const WEATHER_WARNING_INFORMATION = 'warningInfo'
const SPECIAL_WEATHER_TIPS = 'swt'

// 地震資訊應用程式介面
const QUICK_EARTHQUAKE_MESSAGES = 'qem'
const LOCALLY_FELT_EARTH_TREMOR_REPORT = 'feltearthquake'

// 開放數據（氣象及天氣資訊）應用程式介面
const OPEN_DATA_API = {
  dataType: {
      HOURLY_HEIGHTS_OF_TIDES: 'HHOT',
      TIMES_AND_HEIGHTS_OF_HIGH_AND_LOW_TIDES: 'HLT',
      TIMES_OF_SUNRISE_SUN_TRANSIT_AND_SUNSET: 'SRS',
      TIMES_OF_MOONRISE_MOON_TRANSIT_AND_MOONSET: 'MRS',
      DAILY_MEAN_TEMPERATURE: 'CLMTEMP',
      DAILY_MAXIMUM_TEMPERATURE: 'CLMMAXT',
      DAILY_MINIMUM_TEMPERATURE : 'CLMMINT'
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

let test_list = [
  [ { dataType: LOCAL_WEATHER_FORECAST, lang: "tc" }, 'weather-flw', 'weather-flw-result', '本港地區天氣預報'],
  [ { dataType: NINE_DAY_WEATHER_FORECAST, lang: "tc" }, 'weather-fnd', 'weather-fnd-result', '九天天氣預報' ],
  [ { dataType: CURRENT_WEATHER_REPORT, lang: "tc" }, 'weather-rhrread', 'weather-rhrread-result', '本港地區天氣報告' ],
  [ { dataType: WEATHER_WARNING_SUMMARY, lang: "tc" }, 'weather-warnsum', 'weather-warnsum-result', '天氣警告一覽' ],
  [ { dataType: WEATHER_WARNING_INFORMATION, lang: "tc" }, 'weather-warningInfo', 'weather-warningInfo-result', '詳細天氣警告資訊' ],
  [ { dataType: SPECIAL_WEATHER_TIPS, lang: "tc" }, 'weather-swt', 'weather-swt-result', '特別天氣提示' ],
]

function flattenRequest( d_in ) {
  return Object.keys( d_in )
    .map( x => `${x}=${d_in[x]}` )
    .join( '&' )
}

function getRequestString( req_in ) {
  return `https://data.weather.gov.hk/weatherAPI/opendata/weather.php?${flattenRequest(req_in)}`
}

function fetchGet( req_in, html_id_out ) {
  fetch( req_in )
    .then( res => res.json() )
    .then( res_json => {

      document.querySelector( `#${html_id_out}` ).innerHTML = `<pre>${JSON.stringify(res_json, null , 1)}</pre>`

    } )
}

function getEle( sel_in ) {
  return document.querySelector( sel_in )
}

function getWeather( req_in, req_html_id, result_html_id ) {
  let req_string = getRequestString( req_in )
  console.log(req_string)
  getEle( `#${req_html_id}` ).innerHTML = req_string
  fetchGet( req_string, result_html_id )
}

function genHtml(test_list) {
  return test_list.map( x => {
    return `<div class="test_set">
    <h3 class="subtitle is-3">${x[3]}</h3>
    <div id="${x[ 1 ]}"></div>
    <div id="${x[ 2 ]}"></div>
  </div>`
  } ).join('')
}

getEle('#result-sheet').innerHTML = genHtml(test_list)

test_list.forEach( x => {
  getWeather( x[ 0 ], x[ 1 ], x[ 2 ] )
} )

console.log( 'hello app.js' )