
const SELECT_YEAR = _.range(2019,2021+1)
const SELECT_MONTH = _.range(1,12+1)
const SELECT_DAY = _.range(1,31+1)
const SELECT_HOUR = _.range(1,24+1)

const translateValue = (value) => value == ''? '-': value

const wrapTag = (tag_to_wrap, text, class_in, id_in) => {
  // TODO: class_string not implemented
  let class_string = class_in==null?'': `id="${class_in}"`
  let id_string = id_in==null?'': `id="${id_in}"`
  return `<${tag_to_wrap} ${class_string} ${id_string} >${text}</${tag_to_wrap}>`
}

function getOption (text) { return wrapTag('option', text) }

function getTr(text) { return wrapTag('tr', text) }
function getTd(text) { return wrapTag('td', translateValue(text)) }
function getTh(text) { return wrapTag('th', text) }
function getThead(text) { return wrapTag('thead', text) }
function getTfoot(text) { return wrapTag('tfoot', text) }

function getSelect(text, id_in) {
  return wrapTag('select', text, null, id_in)
}

function getYearHtmlSelect(id_in) {
  return getSelect( SELECT_YEAR.map(year => getOption(year)).join(''), id_in)
}

function getMonthHtmlSelect(id_in) {
  return getSelect( SELECT_MONTH.map(month => getOption(month)).join(''), id_in )
}


function getDayHtmlSelect(id_in) {
  return getSelect( SELECT_DAY.map(day => getOption(day)).join(''), id_in )
}

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
  return `<table className="table is-fullwidth is-hoverable is-narrow is-bordered">
    ${thead}
    ${tbody}
    ${tfoot}
  </table>`
}

function getForm(content, form_id){
  return `<form id=${form_id}>${content}</form>`
}

function helloworld(e){
  e.preventDefault()
  console.log('helloworld')
  alert('helloworld')
}