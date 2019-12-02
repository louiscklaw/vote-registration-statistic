
const FIREBASE_API_LOCAL = 'http://localhost:5000/data-gov-hk-tryout/us-central1/'
const FIREBASE_API = 'https://us-central1-data-gov-hk-tryout.cloudfunctions.net/'

function getEndPoint(func_name){
  // TODO: remove me
  return FIREBASE_API_LOCAL+func_name

  if (process.env.NODE_ENV === 'development'){
    return FIREBASE_API_LOCAL+func_name
  }else{
    return FIREBASE_API+func_name
  }
}

let format_testlink_mapper = {
  csv: 'getCSV',
  json: 'getJSON'
}

function getFirebaseTestLink(path_in, format_in, max_length){
  return getEndPoint(format_testlink_mapper[format_in])+'?q='+path_in+"&max_row="+max_length
}

function getCSVFrFirebase(url_csv_path, max_row){
  // return getEndPoint('getCSV')+'?q='+url_csv_path
  return getFirebaseTestLink(url_csv_path, 'csv', max_row)
}

function getJSONFirebaseTestLink(url_json_path){
  // return getEndPoint('getJSON')+'?q='+url_json_path
  return getFirebaseTestLink(url_json_path, 'json')
}

export {
  getEndPoint,
  getCSVFrFirebase,
  getJSONFirebaseTestLink
}