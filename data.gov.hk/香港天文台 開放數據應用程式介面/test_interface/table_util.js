
const test_json = {
  "fields": [ "Month", "Date", "Time", "Height(m)", "Time", "Height(m)", "Time", "Height(m)", "Time", "Height(m)" ],
  "data": [
    [ "01", "01", "0739", "0.7", "1530", "1.5", "1828", "1.5", "", "" ],
    [ "01", "02", "0007", "2.0", "0816", "0.8", "1639", "1.6", "1940", "1.5" ],
    [ "01", "03", "0045", "1.9", "0855", "0.9", "1727", "1.7", "2128", "1.5" ],
    [ "01", "04", "0133", "1.7", "0936", "1.0", "1759", "1.8", "2308", "1.4" ],
    [ "01", "05", "0406", "1.5", "1018", "1.1", "1822", "1.9", "", "" ],
    [ "01", "06", "0053", "1.2", "0551", "1.4", "1059", "1.2", "1834", "2.0" ],
    [ "01", "07", "0138", "1.0", "0733", "1.4", "1139", "1.2", "1850", "2.2" ],
    [ "01", "08", "0216", "0.8", "0832", "1.4", "1218", "1.2", "1917", "2.3" ],
    [ "01", "09", "0253", "0.6", "0924", "1.5", "1259", "1.3", "1950", "2.4" ],
    [ "01", "10", "0331", "0.4", "1011", "1.5", "1342", "1.3", "2030", "2.5" ]
  ]
}

const translateValue = (value) => value == ''? '-': value

const wrapTag = (tag_to_wrap, text) => `<${tag_to_wrap}>${text}</${tag_to_wrap}>`
const getTr = (text) => wrapTag('tr', text)
const getTd = (text) => wrapTag('td', translateValue(text))
const getTh = (text) => wrapTag('th', text)
const getThead = (text) => wrapTag('thead', text)
const getTfoot = (text) => wrapTag('tfoot', text)

function getTheads(fields_in){
  return getThead(
    fields_in.map( field => getTh(field)).join('')
  )
}

function getTfoots(fields_in){
  return getTheads(fields_in)
}

function getTbodys(datas_in){
  return datas_in
    .map(data => data.map(value => getTd(value)).join(''))
    .map(td_in => getTr(td_in))
    .join('')
}

function getTableContentFromJson(json_in){

  let thead = getTheads(json_in.fields)
  let tfoot = getTfoots(json_in.fields)
  let tbody = getTbodys(json_in.data)
  return `<table class="table is-fullwidth is-hoverable is-narrow is-bordered">
    ${thead}
    ${tbody}
    ${tfoot}
  </table>`
}