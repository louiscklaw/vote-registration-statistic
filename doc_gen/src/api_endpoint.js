
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

function getCSVFrFirebase(url_csv_path){
  return getEndPoint('getCSV')+'?q='+url_csv_path
}


export {
  getEndPoint,
  getCSVFrFirebase
}